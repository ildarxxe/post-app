<?php

namespace App\Http\Controllers\api\users;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use App\Models\Profile;
use App\Models\Post;

class UserController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
        ]);
        $data['password'] = Hash::make($data['password']);
        try {
            $user = User::create($data);
            Profile::create([
                'user_id' => $user->id,
                'bio' => '',
                'address' => '',
                'avatar' => ''
            ]);
            return response()->json(['message' => "success"]);
        } catch (\Throwable $th) {
            return response()->json(['error' => $th]);
        }
    }

    public function login(Request $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = null;
            if ($user instanceof User) {
                $token = $user->createToken("authToken")->plainTextToken;
            }

            return response()->json(['token' => $token, 'role' => $user->role_id, 'message' => 'success']);
        }

        return response()->json(['message' => 'Неверные учетные данные'], 401);
    }

    public function get(Request $request)
    {
        $user_id = Auth::user()->id;
        $profile = Profile::where('user_id', $user_id)->first();
        if ($profile->bio) {
            $isProfile = true;
        } else {
            $isProfile = false;
        }
        return response()->json(["user" => $request->user(), 'isProfile' => $isProfile]);
    }

    public function delete()
    {
        $user = Auth::user();
        $user_id = $user->id;
        $posts = Post::where('user_id', $user_id)->get();

        if ($user_id) {
            Profile::where('user_id', $user_id)->delete();
            if ($posts->isNotEmpty()) {
                foreach ($posts as $post) {
                    $post->delete();
                }
            }
            User::where('id', $user_id)->delete();
            return response()->json(['message' => "success"]);
        } else {
            return response()->json(['error' => 'Пользователь не найден'], 404);
        }
    }

    public function getAll()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function getById(Request $request)
    {
        $query = $request->query('search');
        $users = User::where('name', 'LIKE', '%' . $query . '%')
            ->orWhere('name', 'LIKE', '%' . $query . '%')
            ->orWhere('email', 'LIKE', '%' . $query . '%')
            ->orWhere('id', 'LIKE', '%' . $query . '%')
            ->get();
        if ($users) {
            return response()->json(['users' => $users]);
        }
        return response()->json(['error' => 'Пользователь не найден'], 404);
    }
}

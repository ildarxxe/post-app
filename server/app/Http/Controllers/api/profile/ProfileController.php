<?php

namespace App\Http\Controllers\api\profile;

use App\Models\Profile;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use App\Models\User;

class ProfileController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $user_id = $request->user()->id;
        $file = $request->file('avatar');
        $avatar = $file->store('avatars');
        $data = [
            "user_id" => $user_id,
            "bio" => $request->input('bio'),
            "address" => $request->input('address'),
            "avatar" => $avatar,
        ];
        try {
            Profile::create($data);
            return response()->json(['message' => "success"]);
        } catch (\Throwable $th) {
            return response()->json(["error" => $th->getMessage()], 500);
        }
    }

    public function get(Request $request): JsonResponse
    {
        $profile = $request->user()->profile;
        if ($profile) {
            if ($profile->avatar) {
                $profile->avatar = Storage::url($profile->avatar);
            } else {
                return response()->json(['error' => 'Неполный профиль'], 404);
            }
            return response()->json(['profile' => $profile]);
        } else {
            return response()->json(['error' => 'Профиль не найден'], 404);
        }
    }

    public function update(Request $request): JsonResponse
    {
        $user_id = $request->user()->id;
        $profile = Profile::where('user_id', $user_id)->first();
        $user = User::where('id', $user_id)->first();
        $validate = $request->validate([
            "name" => "required|max:255",
            "email" => "required|max:255",
            "bio" => "required",
            "address" => "required",
        ]);

        if ($validate) {
            if ($profile && $user) {
                $user->name = $request->input('name');
                $user->email = $request->input('email');
                $profile->bio = $request->input('bio');
                $profile->address = $request->input('address');
                if ($request->hasFile('avatar')) {
                    $file = $request->file('avatar');
                    $avatar = $file->store('avatars');
                    $profile->avatar = $avatar;
                }
                $profile->save();
                $user->save();
                return response()->json(['message' => "success"]);
            } else {
                return response()->json(['error' => 'Профиль не найден'], 404);
            }
        } else {
            return response()->json(['error' => 'Не валидная форма'], 404);
        }
    }
}

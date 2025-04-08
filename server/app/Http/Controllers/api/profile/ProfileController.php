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
            "name" => "max:255",
            "email" => "max:255",
            "bio" => "required",
            "address" => "required",
        ]);

        if ($validate) {
            if ($profile && $user) {
                $request->input('name') ? $user->name = $request->input('name') : '';
                $request->input('email') ? $user->email = $request->input('email') : '';
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

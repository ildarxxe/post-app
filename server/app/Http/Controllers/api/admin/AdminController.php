<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function getProfileById($id)
    {
        $profile = Profile::where('user_id', $id)->first();
        if ($profile->avatar) {
            $profile->avatar = Storage::url($profile->avatar);
        }
        return response()->json($profile);
    }
}

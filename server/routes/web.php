<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use App\Models\Profile;
use Illuminate\Support\Facades\Storage;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin', function () {
    $users = User::all() ?? "Users not found";
    return view('layouts.admin', ['data' => $users]);
});

Route::get('/users/{id}', function ($id) {
    $user = User::find($id);
    $profile = Profile::where('user_id', $id)->first();

    return view('layouts.userPage', ['data' => [
        "avatar" => $profile?->avatar ? Storage::url($profile->avatar) : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl76RcRXSNxcN_jBJrSPDxL5lNfxYbNUMHTw&s',
        "name" => $user->name,
        "email" => $user->email,
        "bio" => $profile?->bio,
        "address" => $profile?->address
    ]]);
});

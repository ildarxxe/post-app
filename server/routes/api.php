<?php

use App\Http\Controllers\api\admin\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\posts\PostController;
use App\Http\Controllers\api\users\UserController;
use App\Http\Controllers\api\profile\ProfileController;


Route::middleware('auth:sanctum')->group(function () {
    Route::withoutMiddleware('auth:sanctum')->group(function () {
        Route::post('/user/create', [UserController::class, 'create']); // create
        Route::post('/user/auth', [UserController::class, 'login']); // auth
    });

    Route::get('/user', [UserController::class, 'get']); // read
    Route::get('/users', [UserController::class, 'getAll']);
    Route::get('/get/user', [UserController::class, 'getById']);
    Route::delete('/user', [UserController::class, 'delete']); // delete

    Route::get('/profile', [ProfileController::class, 'get']);  // read
    Route::post('/profile', [ProfileController::class, 'update']); // update with user

    Route::post('/posts/create', [PostController::class, 'create']); // C - create
    Route::get('/posts', [PostController::class, 'get']);            // R - read
    Route::get('/posts/{id}', [PostController::class, 'getById']);
    Route::post('/posts/{id}', [PostController::class, 'update']);   // U - update
    Route::delete('/posts/{id}', [PostController::class, 'delete']); // D - delete

    //admin
    Route::middleware('admin')->group(function () {
        Route::get('/users/{id}', [AdminController::class, 'getUserById']); // admin read
        Route::get('/profile/{id}', [AdminController::class, 'getProfileById']);
    });
});

<?php

namespace App\Http\Controllers\api\posts;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $file = $request->file('file');
        $path = $file->store('uploads');
        $desc = $request->input('description');
        $user_id = Auth::user()->id;
        try {
            Post::create([
                "user_id" => $user_id,
                "description" => $desc,
                "img_path" => $path,
            ]);

            return response()->json(["message" => "success"]);
        } catch (\Throwable $th) {
            return response()->json(["error" => $th]);
        }
    }

    public function get(): JsonResponse
    {
        $posts = Post::all()->map(function ($post) {
            if ($post->img_path) {
                $post->img_path = Storage::url($post->img_path);
            }
            return $post;
        });
        return response()->json([$posts]);
    }

    public function getById($id)
    {
        $post = Post::find($id);
        if ($post->img_path) {
            $post->img_path = Storage::url($post->img_path);
        }
        return response()->json([$post]);
    }

    public function update(Request $request, $id): JsonResponse
    {
        $post = Post::find($id);
        if ($post) {
            $post->description = $request->input('description');
            if ($request->hasFile('file')) {
                Storage::delete($post->img_path);
                $file = $request->file('file');
                $path = $file->store('uploads');
                $post->img_path = $path;
            }
            $post->save();
            return response()->json(["message" => "success"]);
        }
        return response()->json(["Error" => "post not found"], 404);
    }

    public function delete($id)
    {
        $post = Post::find($id);
        if ($post) {
            Storage::delete($post->img_path);
            $post->delete();
            return response()->json(["message" => "success"]);
        } else {
            return response()->json(["message" => "post not found"]);
        }
    }
}

<?php

use Illuminate\Support\Facades\Route;

//Routes for auth
Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');
Route::get('profile', 'AuthController@me');
Route::post('register', 'AuthController@register');

//Routes for questions resources
Route::apiResource('question', 'QuestionController');

//Routes for categories resources
Route::apiResource('category', 'CategoryController');

//Routes for replies resources
Route::apiResource('question/{question}/reply', 'ReplyController');

//Routes for likes
Route::post('like/{reply}', 'LikeController@likeIt');
Route::delete('like/{reply}', 'LikeController@unLikeIt');


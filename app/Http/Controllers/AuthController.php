<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', [
           'except' => ['register', 'login']
        ]);
    }

    public function login(Request $request){
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ], [
            'username.required' => 'Usuario requerido',
            'password.required' => 'Password requerido'
        ]);
        $tokenRequest = Request::create(url('/oauth/token'), 'POST', [
            'client_id'=>config('services.passport.client_id'),
            'client_secret'=>config('services.passport.client_secret'),
            'grant_type'=>'password',
            'username' => $request->username,
            'password' => $request->password
        ]);

        $response = app()->handle($tokenRequest);
        if($response->status()>=300){
            if($response->status()===400){
                return response()->json(['message'=>'Credenciales incorrectas'], 400);
            }
            return response()->json(['message'=>'Error inesperado'], 500);
        }

        $tokenResponse = collect(json_decode($response->getContent()));
        $tokenResponse->put('username', $request->username);
        return $tokenResponse;
    }

    public function register(RegisterRequest $request){

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->username;
        $user->password = bcrypt($request->password);
        $user->save();

        return $this->login($request);
    }

    public function logout(){
        auth()->user()->tokens()->each(function($token, $key){
            $token->delete();
        });

        return response()->json([ 'message' => 'Logged out successfully'], Response::HTTP_OK);
    }

    public function me(){
        $user = auth()->user();
        return response()->json([
            'data' => $user
        ]);
    }
}

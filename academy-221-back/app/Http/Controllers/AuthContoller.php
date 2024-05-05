<?php

namespace App\Http\Controllers;

use App\Http\Requests\loginRequest;
use App\Http\Resources\ResponseData;
use App\Http\Resources\UserResource;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Http\ResponseTrait as HttpResponseTrait;

class AuthContoller extends Controller
{


    public function login(loginRequest $request)
    {
        try {
            $field = filter_var($request->input('username'), FILTER_VALIDATE_EMAIL) ? 'email' : 'telephone';
            $credentials = [
                $field => $request->input('username'),
                'password' => $request->input('password')
            ];
            // return $credentials;
            if (Auth::attempt($credentials)) {
                /**@var User $user */
                $user = Auth::user();
                $token = $user->createToken('token')->accessToken;
                return ResponseData::responseFormat ("Authentification réussie", ["user" => UserResource::make(Auth::user()), "token" => $token] , true);
            }
            return $this->responseData("Login ou mot de passe incorrect.", false, Response::HTTP_UNAUTHORIZED);
        } catch (\Throwable $th) {
            return ResponseData::responseFormat ($th->getMessage(), false, Response::HTTP_BAD_REQUEST);
        }
    }
}

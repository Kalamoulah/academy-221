<?php

namespace App\Traits;

use Illuminate\Http\Response;


trait ResponseTrait {

    public function responseData($message='', $data=null,$status = false , $other = '', $code = Response::HTTP_OK){
        return $other !== '' ? ["message"=> $message, "data" => $data, 'status' => $status, 'code' => $code, 'other' => $other ] : ["message"=> $message, "data" => $data, 'status' => $status, 'code' => $code];
    }
}

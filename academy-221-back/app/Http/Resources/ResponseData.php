<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class ResponseData extends Collection
{
    public static function responseFormat(string $message = '',  $data = [], bool $success = true) {
        return response()->json([
            "message" => $message,
            "data" => $data,
            'success' => $success,
        ]);
    }
}

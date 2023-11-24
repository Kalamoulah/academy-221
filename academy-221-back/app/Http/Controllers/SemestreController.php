<?php

namespace App\Http\Controllers;

use App\Http\Requests\SharedRequest;
use App\Http\Resources\ResponseData;
use App\Http\Resources\SharedResource;
use App\Models\Semestre;
use Illuminate\Http\Request;

class SemestreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $semestre = SharedResource::collection(Semestre::all());
        
        return ResponseData::responseFormat('All semestre ',$semestre, true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SharedRequest $request)
    {
        $semestre = Semestre::create($request->all());
        return ResponseData::responseFormat('Semestre ajouter avec success', [$semestre], true);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SharedRequest $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(string $id)
    {
        //
    }
}

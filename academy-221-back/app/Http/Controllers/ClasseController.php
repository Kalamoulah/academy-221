<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClasseRequest;
use App\Http\Resources\ClasseResource;
use App\Http\Resources\ResponseData;
use App\Models\Classe;
use App\Models\ClasseAnneeScolaire;
use App\Models\ClasseModule;
use Illuminate\Http\Request;

class ClasseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    { 
        $classe = ClasseResource::collection(Classe::all());
        return ResponseData::responseFormat('all data',$classe, true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClasseRequest $request)
    {
        $classe = Classe::create($request->all());
        return ResponseData::responseFormat('Classe ajouter avec success', [$classe], true);
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
    public function update(Request $request, string $id)
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

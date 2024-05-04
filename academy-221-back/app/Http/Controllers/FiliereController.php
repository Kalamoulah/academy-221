<?php

namespace App\Http\Controllers;

use App\Http\Requests\SharedRequest;
use App\Http\Resources\ResponseData;
use App\Http\Resources\SharedResource;
use App\Models\Filiere;
use Illuminate\Http\Request;

class FiliereController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $filiere = Filiere::latest()->paginate(10);
      
        $filiere = SharedResource::collection(Filiere::all());
        return ResponseData::responseFormat('Filiere ', $filiere, true);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SharedRequest $request)
    {
        $filiere = Filiere::create($request->all());
        return ResponseData::responseFormat('Filiere ajouter avec success', [$filiere], true);
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
        $filiere = Filiere::findOrFail($id);
        $filiere->update($request->all());

        return ResponseData::responseFormat('Filiere mise à jour avec succès', $filiere, true);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $filiere = Filiere::findOrFail($id);
        $filiere->delete();

        return ResponseData::responseFormat('Filiere supprimée avec succès', [], true);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\SalleRequest;
use App\Http\Resources\ResponseData;
use App\Models\Salle;
use Illuminate\Http\Request;

class SalleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $salle = Salle::latest()->paginate(10);
        $salle = Salle::all();
        
         return ResponseData::responseFormat('all Salles',[$salle], true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SalleRequest $request)
    {
        $salle = Salle::create($request->all());
        return ResponseData::responseFormat('Salle ajouter avec success', [$salle], true);
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
        $salle = Salle::findOrFail($id);
        $salle->update($request->all());

        return ResponseData::responseFormat('Salle mise à jour avec succès', $salle, true);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $salle = Salle::findOrFail($id);
        $salle->delete();

        return ResponseData::responseFormat('Salle supprimée avec succès', [], true);
    }
}

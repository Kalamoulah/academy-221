<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnneeScoliareRequest;
use App\Http\Resources\AnneScolaireResource;
use App\Http\Resources\ResponseData;
use App\Models\AnneScolaire;
use Illuminate\Http\Request;

class AnneeScolaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $anneeScolaire = AnneScolaire::all();
      $anneeScolaire=  ResponseData::responseFormat('Filiere ', AnneScolaireResource::collection($anneeScolaire), true);
      return $anneeScolaire;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AnneeScoliareRequest $request)
    {
        $anneEncours = AnneScolaire::where('en_cours','1')->first();
        if ($anneEncours) {
            $anneEncours->update(['en_cours'=> 0]);
        }
        $anneeScolaire = AnneScolaire::create([
            "libelle"=>$request['libelle'],
            "en_cours" => 1
        ]); 
        
        return AnneScolaireResource::collection($anneeScolaire);  
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

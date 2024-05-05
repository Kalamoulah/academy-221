<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfesseurResource;
use App\Http\Resources\ResponseData;
use App\Models\AnneScolaire;
use App\Models\ModuleProfeseur;
use App\Models\ModuleProfesseur;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }


    public function addProff(Request $request)
    {
        DB::beginTransaction();

        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email',
                'telephone' => 'required|string|unique:users,telephone',
                "password" => 'required|string',
                'modules' => 'required|array',
            ]);

            $user = User::create($validatedData);

            $anne_encours = AnneScolaire::where('en_cours', 1)->first();
            foreach ($validatedData['modules'] as $moduleId) {
                ModuleProfeseur::create([
                    'module_id' => $moduleId,
                    'professeur_id' => $user->id,
                    'anne_scolaire_id'=> $anne_encours->en_cours
                ]);
            }
            DB::commit();
            return ResponseData::responseFormat('professeur ajouté avec succès', [$user], true);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['message' => 'Erreur lors de l\'ajout du professeur : ' . $e->getMessage()], 500);
        }
    }


    public function getProfesseur()
    {
        $professeurs = User::getByRole('professeur');
        return ResponseData::responseFormat('all data', ProfesseurResource::collection($professeurs), true);
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

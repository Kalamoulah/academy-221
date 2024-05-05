<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClasseRequest;
use App\Http\Resources\ClasseResource;
use App\Http\Resources\ResponseData;
use App\Models\Classe;
use App\Models\ClasseAnneeScolaire;
use App\Models\ClasseModule;
use App\Models\Inscription;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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

    public function ajoutAprennant(Request $request) {
        return DB::transaction(function () use ($request) {
            $annee = 1;
            $classeId = $request->classe_id;
            $userIds = [];

            $usersToInsert = [];
            foreach ($request->eleves as $key) {
                $dateNaissance = date("Y/m/d", strtotime($key['date_naissance']));
                $usersToInsert[] = [
                    'name' => $key['name'],
                    'password' => Hash::make('password'),
                    'email' => $key['email'],
                    'role' => $key['role'],
                    'telephone' => $key['telephone'],
                    'date_naissance' => $dateNaissance,
                    'lieu_naissance' => $key['lieu_de_naissance'],
                ];
            }

            User::insert($usersToInsert);

            $userIds = User::whereIn('email', array_column($request->eleves, 'email'))->pluck('id');

            $inscriptionsToInsert = [];
            foreach ($userIds as $userId) {
                $inscriptionsToInsert[] = [
                    'anne_scolaire_id' => $annee,
                    'etudiant_id' => $userId,
                    'classe_id' => $classeId,
                ];
            }
            Inscription::insert($inscriptionsToInsert);

            return [
                "message" => "Inscription réussie avec succès"
            ];
        });
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

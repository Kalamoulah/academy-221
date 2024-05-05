<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\ClasseCours;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SessionController extends Controller
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
        $validatedData =  $validatedData = $request->validate([
            'heureDebut' => 'required|date_format:H:i',
            'heureFin' => 'required|date_format:H:i',
            'date' => 'required|date',

        ]);
       return DB::transaction(function () use ($request, $validatedData) {
        $classesIds = $this->getClassesIds($request->classes);
        $classeCours = $this->getClasseCours($request->cours_id, $classesIds);

        if ($classeCours->isEmpty()) {
            // return DataCollection::toApiResponse("Aucune classe associée à ce cours.", [], false);
        }

        $classesAnneeScolaire = $classeCours->pluck('classe_annee_scolaire_id');
        $classeCourIds = $this->getClasseCourIds($request->cours_id, $classesAnneeScolaire);

        $sessionData = $this->buildSessionData($classeCourIds, $validatedData, $request->salle);

        DB::table('sessions')->insert($sessionData);

        // return DataCollection::toApiResponse("Session ajoutée avec succès", $sessionData, true);
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


    protected function getClassesIds($classLabels)
    {
    return Classe::whereIn('libelle', $classLabels)->pluck('id');
    }

    protected function getClasseCours($coursId, $classesIds)
    {
    return ClasseCours::where('cours_id', $coursId)
        ->whereIn('classe_annee_scolaire_id', $classesIds)
        ->get();
    }

    protected function getClasseCourIds($coursId, $classesAnneeScolaire)
    {
    return ClasseCours::whereIn('classe_annee_scolaire_id', $classesAnneeScolaire)
        ->where('cours_id', $coursId)
        ->pluck('id');
    }
    protected function buildSessionData($classeCourIds, $validatedData, $salleId)
{
    $sessionData = [];

    foreach ($classeCourIds as $classeCoursId) {
        $classeCours = ClasseCours::find($classeCoursId);

        $heureDebut = Carbon::parse($validatedData['heureDebut']);
        $heureFin = Carbon::parse($validatedData['heureFin']);
        $dureeSession = $heureDebut->diffInHours($heureFin);

        if ($dureeSession > $classeCours->heure_restant) {
            // return DataCollection::toApiResponse("La durée de la session dépasse l'heure restante pour cette classe.", [$dureeSession], false);
        }

        $classeCours->heure_restant -= $dureeSession;
        $classeCours->save();

        $sessionData[] = [
            'classe_cours_id' => $classeCoursId,
            'heure_debut' => $validatedData['heureDebut'],
            'heure_fin' => $validatedData['heureFin'],
            'date' => $validatedData['date'],
            'salle_id' => $salleId,
            'etat' => 'invalide',
        ];
    }

    return $sessionData;
}
}

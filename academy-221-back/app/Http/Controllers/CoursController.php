<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ResponseData;
use App\Http\Resources\SharedResource;
use App\Http\Resources\ProfesseurResource;
use App\Http\Resources\CoursResource;
use App\Http\Resources\ClasseResource;
use App\Http\Resources\AnneeScolaireSemestreResource;
use App\Models\AnneScolaireSemestre;
use App\Models\Module;
use App\Models\ModuleProfeseur;
use App\Models\ClasseModule;
use App\Models\Cours;
use Illuminate\Support\Facades\DB;

class CoursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return "moussa sagna";
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $anneScolaire_semestre = $this->getAnneScolaireSemestre($request->semestre);
        if (!$anneScolaire_semestre) {
            return response()->json("cette semestre n'existe pas sur cette anne");
        }
    
        $moduleProfesseur = $this->getModuleProfesseur($request->module, $request->professeur, 1);
        if (!$moduleProfesseur) {
            return response()->json('correspondance non trouvée entre le prof et le module');
        }

        $coursPlanifie = Cours::create([
            'module_professeurs_id' => $moduleProfesseur->id,
            'anne_scolaire_semestre_id' => $anneScolaire_semestre->id,
            'color' => $request->color,
            'classe_concerne' => $request->classeConcerne,
            'heure_global' => $request->heure_global,
        ]);

        $classes = explode(',', $request->classeConcerne);
        $coursPlanifie->classes()->attach($classes, [
            'heure_ecoule' => '0',
        ]);
        return ResponseData::responseFormat ("votre cour a été créer", $coursPlanifie , true);
       
    }

    protected function getAnneScolaireSemestre($semestreId)
    {
        return AnneScolaireSemestre::where('semestre_id', $semestreId)
            ->where('anne_scolaire_id', 1)->first();
    }

    protected function getModuleProfesseur($moduleId, $professeurId, $anneScolaireSemestreId)
    {
        return DB::table('module_professeurs')
            ->where('module_id', $moduleId)
            ->where('professeur_id', $professeurId)
            ->where('anne_scolaire_id', $anneScolaireSemestreId)
            ->first();
    }

    public function all()
    {
        $semestre = AnneeScolaireSemestreResource::collection(AnneScolaireSemestre::all());
        // $courses  = CoursResource::collection(Cours::all()->with(classe));
        $courses = CoursResource::collection(Cours::with('classes')->get());
        $module = SharedResource::collection(Module::all());
        return ResponseData::responseFormat ("All Data", [
            "semestres" => $semestre,
            "course" => $courses,
            "modules" => $module
        ], true);
    }

    public function getProfesseurAndClasse($idmodule, $idSemeste)
    {

        $professeur = ModuleProfeseur::getsProfesseursByIdModule($idmodule);
        $classes = ClasseModule::getsClassesByIdModuleAndSemestre($idmodule, $idSemeste);
        return ResponseData::responseFormat('liste prof et classe', [
            "professeurs" => ProfesseurResource::collection($professeur),
            "classes" => ClasseResource::collection($classes)
        ], true);
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

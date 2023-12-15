<?php

namespace App\Http\Resources;

use App\Models\AnneScolaireSemestre;
use App\Models\Classe;
use App\Models\ModuleProfeseur;
use App\Http\Resources\ModuleProfesseurResource;
use App\Http\Resources\AnneeScolaireSemestreResource;
use App\Http\Resources\ClasseResource;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CoursResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $classeIds = explode(',', $this->classe_concerne);
        $classes = Classe::whereIn('id', $classeIds)->pluck('libelle');

        $professeurResource = ModuleProfesseurResource::make(ModuleProfeseur::find($this->module_professeurs_id))->toArray($request);
        $moduleResource = AnneeScolaireSemestreResource::make(AnneScolaireSemestre::find($this->anne_scolaire_semestre_id))->toArray($request);

        return array_merge(
            [
                'cours_id' => $this->id,
                // 'annee_scolaire_semestre' => AnneScolaireSemestreResource::make(AnneScolaireSemestre::find($this->annee_scolaire_semestre_id)),
                'heure_global' => $this->heure_global,
                'color' => $this->color,
                'classe_concerne' => $classes->toArray(),
                'heure_restant '=> $this->classes[0]->pivot->heure_ecoule
            ],
            $moduleResource,
            $professeurResource
        );
    }
}

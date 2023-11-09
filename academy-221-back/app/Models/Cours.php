<?php

namespace App\Models;

use App\Models\AnneScolaireSemestre;
use App\Models\ModuleProfeseur;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Cours extends Model
{
    use HasFactory;
    protected $guarded = [
        'id'
    ];

    public function module_professeurs(): BelongsTo
    {
        return $this->belongsTo(ModuleProfeseur::class, 'module_professeurs_id');
    }

 
    public function anne_scolaire_semestres(): BelongsTo
    {
        return $this->belongsTo(AnneScolaireSemestre::class);
    }

    public function professeur()
    {
        return $this->belongsTo(User::class, 'professeur_id');
    }


    public function classes()
    {
        return $this->belongsToMany(Classe::class, 'classe_cours', 'cours_id', 'classe_annee_scolaire_id')
            ->withPivot(['heure_global', 'heure_restant']);
    }

    public function sessionsEleve($inscription_id){
        $allCourse =  Cours::where(function ($query) use ($inscription_id) {
            $query->where('classe_concerne', 'LIKE', "%,$inscription_id,%")
                ->orWhere('classe_concerne', 'LIKE', "$inscription_id,%")
                ->orWhere('classe_concerne', 'LIKE', "%,$inscription_id")
                ->orWhere('classe_concerne', '=', $inscription_id); 
        })->get();

        return $allCourse;

    }

    
}
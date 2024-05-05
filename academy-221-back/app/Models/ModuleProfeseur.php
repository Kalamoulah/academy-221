<?php

namespace App\Models;

use App\Http\Resources\DataCollection;
use App\Models\AnneScolaire;
use App\Models\AnneScolaireSemestre;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ModuleProfeseur extends Model
{


    use HasFactory;
    protected $table = 'module_professeurs';
    // public function anne_scolaire_semestres() :BelongsToMany{
    //     return $this->belongsToMany(AnneScolaireSemestre::class,);
    // }

    protected $guarded = [
        "id",
    ];


    public function professeur(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function module(): BelongsTo
    {
        return $this->belongsTo(Module::class);
    }


    public static function getsProfesseursByIdModule($idModule)
    {
        $anneeEnCours = AnneScolaire::getAnneeEnCours();
        if (!$anneeEnCours) {
            // return DataCollection::toApiResponse("cette n'est pas l'année en cours", [], false);
        }

        return self::where('module_id', $idModule)
            ->where('anne_scolaire_id', $anneeEnCours->id)
            ->join('users', 'module_professeurs.professeur_id', '=', 'users.id')
            ->select('users.*')
            ->get();
    }
}

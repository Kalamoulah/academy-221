<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AnneScolaire extends Model
{
    use HasFactory;

    public function semestres(): BelongsToMany
    {
        return $this->belongsToMany(Semestre::class);
    }

    /**
     * Récupère l'année scolaire en cours.
     *
     * @return AnneScolaire|null L'année scolaire en cours ou false si aucune n'est trouvée.
     */
    public static function getAnneeEnCours()
    {
        return self::where('en_cours', 1)->first();
    }
}
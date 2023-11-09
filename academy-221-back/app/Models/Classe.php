<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Classe extends Model
{
    use HasFactory;

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'classe_cours', 'classe_id', 'cours_id')
            ->withPivot(['heure_global', 'heure_restant']);
    }
}

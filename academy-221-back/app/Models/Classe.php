<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Classe extends Model
{
    use HasFactory;
    protected $guarded = [
        "id",
        ];

    public function cours()
    {
        return $this->belongsToMany(Cours::class, 'classe_cours', 'classe_id', 'cours_id')
            ->withPivot(['heure_global', 'heure_restant']);
    }

    public function anne_scolaires(): BelongsToMany
    {
        return $this->belongsToMany(AnneScolaire::class);
    }

    public function filiere(): BelongsTo
    {
        return $this->belongsTo(Filiere::class);
    }

}

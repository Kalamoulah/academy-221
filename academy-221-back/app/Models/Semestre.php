<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Semestre extends Model
{
    use HasFactory;

    public function anne_scolaires(): BelongsToMany
    {
        return $this->belongsToMany(AnneScolaire::class);
    }
}

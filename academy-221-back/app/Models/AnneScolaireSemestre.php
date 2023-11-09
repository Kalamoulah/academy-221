<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AnneScolaireSemestre extends Model
{
    use HasFactory;

    public function module_professeurs() :BelongsToMany{
        return $this->belongsToMany(ModuleProfeseur::class, 'cours');
    }
    
    public function semestre(): BelongsTo
    {
        return $this->belongsTo(Semestre::class);
    }

    public function anne_scolaire(): BelongsTo
    {
        return $this->belongsTo(AnneScolaire::class);
    }

}

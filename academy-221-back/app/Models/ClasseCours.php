<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClasseCours extends Model
{
    use HasFactory;

    protected $table = 'classe_cours';


    public function  classe ():BelongsTo{
        return $this->belongsTo(Classe::class);

    }

    public function  cours ():BelongsTo{
        return $this->belongsTo(Cours::class);

    }
}

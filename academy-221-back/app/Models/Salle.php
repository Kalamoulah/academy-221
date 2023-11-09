<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salle extends Model
{
    use HasFactory;

    public function sessions()
    {
        return $this->hasMany(Session::class, 'salle_id');
    }
    public function isOccupied($date, $heureDebut, $heureFin)
    {
        $sessionWithSameDate = $this->sessions()->where('date', $date)->first();
        if ($sessionWithSameDate) {
            return $sessionWithSameDate->heure_debut < $heureFin && $sessionWithSameDate->heure_fin > $heureDebut;
        }
        return false;
    }
}
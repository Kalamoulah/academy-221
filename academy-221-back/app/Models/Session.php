<?php

namespace App\Models;

use App\Http\Resources\DataCollection;
use App\Http\Resources\ResponseData;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;
    protected $guarded = [
        "id",
        ];
    public function classeCours()
    {
        return $this->belongsTo(ClasseCours::class);
    }

    public function salle()
    {
        return $this->belongsTo(Salle::class);
    }       

    public function marquerCommeTermine() {
        $this->terminer = true;
        $this->save();
    }

    public function mettreAJourEtat($session_ids, $nouvelEtat) {
        $updates = [];
        switch ($nouvelEtat) {
            case 'valider':
                $updates['etat'] = 'valide';
                break;
            case 'invalider':
                $updates['etat'] = 'invalide';
                break;
            case 'annuler':
                $updates['etat'] = 'annuler';
                break;
            default:
            return ResponseData::responseFormat('Erreur : nouvel état non reconnu', [], false);
              
        }
   
        Session::whereIn('id', $session_ids)->update($updates);
    
       
    }   
}
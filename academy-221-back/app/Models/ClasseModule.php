<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ClasseModule extends Model
{
    use HasFactory;

    public static function getsClassesByIdModuleAndSemestre($idModule, $idSemestre)
    {
      return   self::where('module_id', $idModule)
      ->where('anne_scolaire_semestre_id', $idSemestre)
      ->join('classe_annee_scolaires', 'classe_modules.classe_annee_scolaire_id', '=', 'classe_annee_scolaires.id')
      ->join('classes', 'classe_annee_scolaires.classe_id', '=', 'classes.id')
      ->select('classes.*')
      ->get();
    }


}
<?php

use App\Http\Controllers\AnneeScolaireController;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\FiliereController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\SalleController;
use App\Http\Controllers\SemestreController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\userController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('salle', SalleController::class )->only(['index','store','update','destroy']);
Route::apiResource('semestre', SemestreController::class )->only(['index','store','update','destroy']);
Route::apiResource('filiere', FiliereController::class )->only(['index','store','update','destroy']);
Route::apiResource('module', ModuleController::class )->only(['index','store','update','destroy']);
Route::apiResource('classe', ClasseController::class )->only(['index','store','update','destroy']);
Route::apiResource('anneeScolaire', AnneeScolaireController::class )->only(['index','store','update','destroy']);
Route::apiResource('cours', CoursController::class )->only(['index','store','update','destroy']);
Route::get('professeur', [userController::class, 'getProfesseur'] );
Route::post('professeur', [userController::class, 'addProff'] );
Route::get('all', [CoursController::class, 'all']);
Route::post('inscription', [ClasseController::class, 'ajoutAprennant']);
Route::get('module/{idmodule}/semetre/{idSemeste}', [CoursController::class, 'getProfesseurAndClasse']);

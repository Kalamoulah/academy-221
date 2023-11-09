<?php

use App\Models\AnneScolaireSemestre;
use App\Models\ClasseAnneeScolaire;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('classe_modules', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AnneScolaireSemestre::class)->constrained();
            $table->foreignIdFor(ClasseAnneeScolaire::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classe_modules');
    }
};

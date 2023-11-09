<?php

use App\Models\ClasseAnneeScolaire;
use App\Models\Cours;
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
        Schema::create('classe_cours', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Cours::class)->constrained();
            $table->foreignIdFor(ClasseAnneeScolaire::class)->constrained();
            $table->string('heure_restant');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classe_cours');
    }
};

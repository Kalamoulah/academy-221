<?php

use App\Models\ClasseCours;
use App\Models\Salle;
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
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(ClasseCours::class)->constrained();
            $table->foreignIdFor(Salle::class)->nullable()->constrained();
            $table->time('heure_debut');
            $table->time('heure_fin');
            $table->date('date');
            $table->enum('etat',['valide','invalide','annuler']);
            $table->boolean('terminer')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};

<?php

use App\Models\AnneScolaire;
use App\Models\Semestre;
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
        Schema::create('anne_scolaire_semestres', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AnneScolaire::class)->constrained();
            $table->foreignIdFor(Semestre::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('anne_scolaire_semestres');
    }
};

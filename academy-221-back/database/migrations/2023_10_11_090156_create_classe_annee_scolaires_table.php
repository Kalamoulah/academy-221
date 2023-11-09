<?php

use App\Models\AnneScolaire;
use App\Models\Classe;
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
        Schema::create('classe_annee_scolaires', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Classe::class)->constrained();
            $table->foreignIdFor(AnneScolaire::class)->constrained();
            $table->string('effectif_classe')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classe_annee_scolaires');
    }
};

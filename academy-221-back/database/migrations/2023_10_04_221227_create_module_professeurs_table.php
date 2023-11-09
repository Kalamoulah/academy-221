<?php

use App\Models\AnneScolaire;
use App\Models\Module;
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
        Schema::create('module_professeurs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Module::class)->constrained();
            $table->foreignId('professeur_id')->constrained('users');
            $table->foreignIdFor(AnneScolaire::class)->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('module_professeurs');
    }
};

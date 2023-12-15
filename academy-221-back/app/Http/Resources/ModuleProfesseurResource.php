<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModuleProfesseurResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'professeur'=> ProfesseurResource::make($this->professeur),
            'module'=>  ModuleResource::make($this->module),
            // 'professeur'=> ProfesseurResource::make($this->professeur),
            // 'module'=>  $this->module,
        ];
    }
}

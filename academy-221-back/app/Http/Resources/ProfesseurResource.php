<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfesseurResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $modules = ProfWithModule::collection($this->module)->pluck('libelle');
        return [
          "id"=>$this->id,
          "name"=>$this->name,
          'email'=>$this->email,
          'telephone'=>$this->telephone,
          'role'=>$this->role,
          'date_naissance'=>$this->date_naissance,
          'lieu_naissance'=>$this->lieu_naissance,
          'address'=>$this->address,
          'modules' => implode(",", $modules->toArray())
        ];
    }
}

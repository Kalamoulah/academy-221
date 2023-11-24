<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnneeScoliareRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "libelle"=> "required",
            'classes' => 'required|array',
            'classes.*' => 'required',
            'semestres' => 'required|array',
            'semestres.*' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'libelle.required' => 'Le tableau est requis.',
            'classes.required' => 'Le tableau est requis.',
            'classes.array' => 'Le champ tableau doit être un tableau.',
            'classes.*.required' => 'Chaque élément du tableau est requis.',
            'semestres.required' => 'Le tableau est requis.',
            'semestres.array' => 'Le champ tableau doit être un tableau.',
            'semestres.*.required' => 'Chaque élément du tableau est requis.',
        ];
    }
}

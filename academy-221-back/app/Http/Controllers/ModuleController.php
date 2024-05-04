<?php

namespace App\Http\Controllers;

use App\Http\Requests\SharedRequest;

use App\Http\Resources\ModuleResource;
use App\Http\Resources\ResponseData;
use App\Models\Module;

use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $module = Module::latest()->paginate(10);
        $module = Module::all();
        return ResponseData::responseFormat('all module', [ModuleResource::collection($module)], true);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SharedRequest $request)
    {
        $module = Module::create($request->all());
        return ResponseData::responseFormat('Module ajouter avec success',new ModuleResource($module), true);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $module = Module::findOrFail($id);
        $module->update($request->all());

        return ResponseData::responseFormat('Module mise à jour avec succès', $module, true);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $module = Module::findOrFail($id);
        $module->delete();

        return ResponseData::responseFormat('Module supprimée avec succès', [], true);
    }
}

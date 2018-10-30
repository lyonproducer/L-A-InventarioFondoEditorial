<?php

namespace App\Http\Controllers\Materiales;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Entrada;
use App\Models\Material;
use DB;

class EntradasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$materiales=Material::with('rubro:id,nombre')->get();
        //$entradas=Entrada::All();
        $entradas=Entrada::with('material:id,nombre')->get();
        return response()->json($entradas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $entrada=Entrada::create($request->all());

        $material = Material::find($request->material_id);
        $material->cantidad += $request->cantidad;
        $material->save();

        //dd($material->toArray());
        return response()->json(['info'=> 'Entrada añadida correctamente','data'=>$entrada]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

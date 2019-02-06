<?php

namespace App\Http\Controllers\Materiales;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Entrega;
use App\Models\Material;

class EntregasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $entregas=Entrega::with('material:id,nombre')->get();
        return response()->json($entregas);
    }

    public function indexReporte(Request $request)
    {
        $entregas=Entrega::whereBetween('created_at', array($request->from,$request->to))
                        ->with('material')->get();

        foreach($entregas as $entrega){
            $entrega['nombre']=$entrega->material->nombre;
            $entrega['codigo']=$entrega->material->codigo;
        }

        return response()->json($entregas);
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
        $material = Material::find($request->material_id);
    
        if($request->cantidad > $material->cantidad){
            return response()->json(['info'=> 'Excede la cantidad disponible']);
        }else

        $material->cantidad -= $request->cantidad;
        $material->save();
        $entrega=Entrega::create($request->all());
        
        return response()->json(['info'=> 'Entrega registrada correctamente','data'=>$entrega]);
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

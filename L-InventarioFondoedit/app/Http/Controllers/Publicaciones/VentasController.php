<?php

namespace App\Http\Controllers\Publicaciones;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Venta;
use App\Models\Salida;

class VentasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$ventas = Venta::all();
        $ventas=Venta::with('salida')->get();
        return response()->json($ventas);
    }

    public function indexReporte(Request $request)
    {
        $ventas=Venta::whereBetween('created_at', array($request->from,$request->to))
        ->with('salida')->get();
        

        foreach($ventas as $venta){

            $salidas=Salida::where('id',$venta->salida_id)->with('publicaciones')->get();
            //$venta['salidaPublicaciones']=$salidas;
            $venta['cantidad']=count($salidas[0]->publicaciones);
        }

        return response()->json($ventas);
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
        //
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

<?php

namespace App\Http\Controllers\Publicaciones;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Stock;
use App\Models\Publicacion;

class StocksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$stocks = Stock::All();
        $stocks=Stock::with('publicacion')->get();
        return response()->json($stocks);
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
        //dd($request->all());
        $stock=Stock::create($request->all());

        if($request->tipo_cantidad == 'CD'){
            $publicacion = Publicacion::find($request->publicacion_id);
            $publicacion->cantidad_cd += $request->cantidad;
            $publicacion->save();
        }

        if($request->tipo_cantidad == 'Físico'){
            $publicacion = Publicacion::find($request->publicacion_id);
            $publicacion->cantidad_impresa += $request->cantidad;
            $publicacion->save();
        }

        return response()->json(['info'=> 'Stock añadida correctamente','data'=>$stock]);
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
        $stock = Stock::find($id);
        $stock->delete();
        return response()->json(['info'=> 'Stock eliminado correctamente']);
    }
}

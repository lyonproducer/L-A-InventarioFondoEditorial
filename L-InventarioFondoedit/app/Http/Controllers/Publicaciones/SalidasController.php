<?php

namespace App\Http\Controllers\Publicaciones;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Salida;
use App\Models\Publicacion;
use App\Models\Venta;

class SalidasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$salidas = Salida::All();
        $salidas=Salida::with('publicaciones')->get();
        return response()->json($salidas);
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
        
        //Crea valores en la tabla salida
        $salida=Salida::create($request->all());
        //crea respectivos valores en la tabla pivote 
        $salida->publicaciones()->attach($request->get('publicaciones'));
        //Asigna a publicaciones el array mandado por request
        $publicaciones = $request->get('publicaciones');
        //por cada publicacion mandado del array realizara :
        foreach($publicaciones  as $publicacion){

            //dd($publicacion["tipo_cantidad"]);
            //si se ingreso cd se suma cd en la publicacion 
            if($publicacion['tipo_cantidad'] == 'CD'){
                $pub = Publicacion::find($publicacion['publicacion_id']);
                $pub->cantidad_cd -= $publicacion['cantidad'];
                $pub->save();
            }
            //si se ingreso fisico se suma fisico en la publicacion
            if($publicacion['tipo_cantidad'] == 'Físico'){
                $pub = Publicacion::find($publicacion['publicacion_id']);
                $pub->cantidad_impresa -= $publicacion['cantidad'];
                $pub->save();
            }

        }
        
        if($request->tipo_entrega=='Venta'){

            $requestVenta = $request->get('venta');
            //dd($requestVenta);
            $venta = new Venta;
            $venta->bauche          = $requestVenta['bauche'];
            $venta->banco           = $requestVenta['banco'];
            $venta->monto_credito   = $requestVenta['monto_credito'];
            $venta->monto_debito    = $requestVenta['monto_debito'];
            $venta->salida_id       = $salida->id;
            $venta->save();
            
            return response()->json(
                [
                    'info'=> 'Salida añadida correctamente',
                    'salida'=>$salida,
                    'venta'=>$venta
                ]
            );
            //return $venta;
            //dd($venta);
        }

        return response()->json(
            [
                'info'=> 'Salida añadida correctamente',
                'salida'=>$salida
            ]
        );
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

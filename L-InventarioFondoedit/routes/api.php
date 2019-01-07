<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink','ResetPasswordController@sendEmail');
    Route::post('resetPassword','ChangePasswordController@process');

    //Rubros
    Route::resource('rubros',   'Materiales\RubrosController')->middleware('jwt.verify');;
    Route::resource('materiales',   'Materiales\MaterialesController')->middleware('jwt.verify');;
    Route::resource('entradas',   'Materiales\EntradasController')->middleware('jwt.verify');;
    Route::resource('entregas',   'Materiales\EntregasController')->middleware('jwt.verify');;

    //Publicaciones
    Route::resource('publicaciones',   'Publicaciones\PublicacionesController')->middleware('jwt.verify');
    Route::resource('stocks',   'Publicaciones\StocksController')->middleware('jwt.verify');
    Route::resource('salidas',   'Publicaciones\SalidasController')->middleware('jwt.verify');
    Route::resource('ventas',   'Publicaciones\VentasController')->middleware('jwt.verify');

    //Reportes
    Route::post('publicacionesReporte', 'Publicaciones\PublicacionesController@indexReporte');//
    Route::post('stocksReporte', 'Publicaciones\StocksController@indexReporte')->middleware('jwt.verify');
    Route::post('salidasReporte', 'Publicaciones\SalidasController@indexReporte');//
    Route::post('ventasReporte', 'Publicaciones\VentasController@indexReporte');//

    Route::post('materialesReporte', 'Materiales\MaterialesController@indexReporte');//
    Route::post('materialesEntradasReporte', 'Materiales\EntradasController@indexReporte');//
    Route::post('materialesEntregasReporte', 'Materiales\EntregasController@indexReporte');//
});

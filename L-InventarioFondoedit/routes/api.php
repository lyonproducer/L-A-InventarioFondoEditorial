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
    Route::resource('rubros',   'Materiales\RubrosController');
    Route::resource('materiales',   'Materiales\MaterialesController');
    Route::resource('entradas',   'Materiales\EntradasController');
    Route::resource('entregas',   'Materiales\EntregasController');

    //Publicaciones
    Route::resource('publicaciones',   'Publicaciones\PublicacionesController');
    Route::resource('stocks',   'Publicaciones\StocksController');
    Route::resource('salidas',   'Publicaciones\SalidasController');
    Route::resource('ventas',   'Publicaciones\VentasController');

});

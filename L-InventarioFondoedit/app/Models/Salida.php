<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salida extends Model
{
    protected $table = 'salidas';

    protected $fillable=[
        
        'sede',
        'cliente',
        'tipo_entrega'

    ]; 

    public function publicaciones(){
        return $this->belongsToMany(Publicacion::class);
    }

    public function venta(){
        return $this->hasOne(Venta::class);
    }
}

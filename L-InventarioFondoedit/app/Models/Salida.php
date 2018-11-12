<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salida extends Model
{
    protected $table = 'salidas';

    protected $fillable=[
        
        'sede',
        'cliente',
        //'cantidad',
        'tipo'

    ]; 

    public function publicaciones(){
        return $this->belongsToMany(Publicacion::class);
    }
}

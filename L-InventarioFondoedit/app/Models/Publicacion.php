<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publicacion extends Model
{
    protected $table = 'publicaciones';

    protected $fillable=[
        
        'codigo',
        'isbn',
        'tema', 
        'titulo', 
        'fecha_publicacion',
        'descripcion', 
        'departamento',
        'origen',
        'tipo_publicacion',
        'categoria',
        'precio',
        'cantidad_impresa',
        'cantidad_cd',
        'url_digital',
        'autor'
    ];
    
    public function stocks(){
        return $this->hasMany(Stock::class);
    }

    public function salidas(){
        return $this->belongsToMany(Salida::class);
    }


}

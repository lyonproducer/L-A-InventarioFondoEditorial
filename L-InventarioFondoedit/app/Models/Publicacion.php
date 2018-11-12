<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publicacion extends Model
{
    protected $table = 'publicaciones';

    protected $fillable=[
        
        'tema', 
        'titulo', 
        'fecha_elaboracion',
        'descripcion', 
        'departamento',
        'origen',
        'tipo_publicacion',
        'categoria',
        'cantidad_impresa',
        'cantidad_cd',
        'url_digital',
        'isbn',
        'costo_unitario',
        'codigo',
        'volumen',
        'periodo',
        'numero_edicion',
        'autor',
        'precio_unitario'
        
    ];
    
    public function stocks(){
        return $this->hasMany(Stock::class);
    }

    public function salidas(){
        return $this->belongsToMany(Salida::class);
    }


}

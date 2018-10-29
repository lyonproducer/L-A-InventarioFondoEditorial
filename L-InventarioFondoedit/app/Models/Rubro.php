<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rubro extends Model
{

    protected $table = 'rubros';

    protected $fillable=[
        'nombre', 'descripcion', 'unidad_medida'
    ]; 
    
    public function materials(){
        return $this->hasOne(Material::class);
    }

}

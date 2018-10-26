<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Material;

class Rubro extends Model
{
    protected $fillable=[
        'nombre', 'descripcion', 'unidad_medida'
    ]; 

    public function Material(){
        return $this->belongsTo(Material::class);
    }
}

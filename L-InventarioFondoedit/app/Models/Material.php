<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Entrada;
use App\Models\Entrega;
use App\Models\Rubro;

class Material extends Model
{

    protected $table = 'materiales';

    protected $fillable=[
        'rubros_id', 'codigo', 'nombre','descripcion', 'cantidad', 'precio'
    ]; 

    public function rubro(){
        return $this->hasOne(Rubro::class,'id');
    }

    /*
    public function entregas(){
        return $this->hasMany(Entrega::class);
    }

    public function entradas(){
        return $this->hasMany(Entrada::class);
    }
    */
}

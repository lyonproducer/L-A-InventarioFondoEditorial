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
        'id_rubros', 'codigo', 'nombre','descripcion', 'cantidad', 'precio'
    ]; 

    public function Rubro(){
        return $this->hasOne(Rubro::class,'id_rubros');
    }

    public function Entregas(){
        return $this->hasMany(Entrega::class);
    }

    public function Entradas(){
        return $this->hasMany(Entrada::class);
    }
}

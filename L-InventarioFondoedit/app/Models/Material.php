<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{

    protected $table = 'materiales';

    protected $fillable=[
        'rubro_id', 'codigo', 'nombre','descripcion', 'cantidad', 'precio'
    ]; 

    public function rubro(){
        return $this->belongsTo(Rubro::class);
    }
    
    public function entregas(){
        return $this->hasMany(Entrega::class);
    }

    public function entradas(){
        return $this->hasMany(Entrada::class);
    }
    
}

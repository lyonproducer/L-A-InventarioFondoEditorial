<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Material;

class Entrada extends Model
{
    protected $fillable=[
        'cantidad', 'id_materiales'
    ];

    public function Entrada(){
        return $this->belongsTo(Material::class,'id_materiales');
    }
}

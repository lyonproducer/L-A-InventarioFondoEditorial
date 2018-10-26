<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Material;

class Entrega extends Model
{
    protected $fillable=[
        'persona', 'cantidad', 'unidad_diseño', 'proyecto','id_materiales'
    ];

    public function Entrega(){
        return $this->belongsTo(Material::class,'id_materiales');
    }
}

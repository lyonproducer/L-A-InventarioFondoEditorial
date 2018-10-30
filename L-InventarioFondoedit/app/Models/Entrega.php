<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Material;

class Entrega extends Model
{
    protected $fillable=[
        'persona', 'cantidad', 'unidad_diseño', 'proyecto','material_id'
    ];

    public function material(){
        return $this->belongsTo(Material::class,'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
    protected $fillable=[
        'cantidad', 'material_id'
    ];

    public function material(){
        return $this->belongsTo(Material::class);
    }
}

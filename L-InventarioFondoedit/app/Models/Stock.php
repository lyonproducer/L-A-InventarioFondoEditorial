<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $table = 'stocks';

    protected $fillable=[
        
        'cantidad',
        'tipo_entrega',
        'tipo_cantidad',
        'publicacion_id'

    ]; 

    public function publicacion(){
        return $this->belongsTo(Publicacion::class);
    }


}

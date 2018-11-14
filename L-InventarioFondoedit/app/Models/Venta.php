<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $table = 'ventas';

    protected $fillable=[
        'bauche', 
        'banco', 
        'monto_debito',
        'monto_credito'
    ]; 
    
    public function salida(){
        return $this->belongsTo(Salida::class);
    }
}

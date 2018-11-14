<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVentasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->increments('id');

            $table->string('bauche');
            $table->string('banco');
            $table->integer('monto_debito')->nullable(); 
            $table->integer('monto_credito')->nullable(); 

            $table->integer('salida_id')->unsigned();
            $table->timestamps();

            $table->foreign('salida_id')->references('id')->on('salidas')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ventas');
    }
}

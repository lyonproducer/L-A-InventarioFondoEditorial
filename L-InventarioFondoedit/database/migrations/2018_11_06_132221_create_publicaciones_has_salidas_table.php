<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePublicacionesHasSalidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publicaciones_has_salidas', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('publicacion_id')->unsigned();
            $table->integer('salida_id')->unsigned();

            $table->timestamps();

            $table->foreign('publicacion_id')->references('id')->on('publicaciones')
            ->onDelete('cascade')
            ->onUpdate('cascade');

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
        Schema::dropIfExists('publicaciones_has_salidas');
    }
}

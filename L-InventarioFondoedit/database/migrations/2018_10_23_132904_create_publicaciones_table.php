<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePublicacionesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publicaciones', function (Blueprint $table) {
            $table->increments('id');

            $table->string('tema',128);
            $table->string('titulo',128);
            $table->string('fecha_elaboracion');
            $table->text('descripcion')->nullable();
            $table->string('departamento');
            $table->string('origen'); 
            $table->enum('tipo_publicacion', ['Revista', 'Libro']);
            $table->string('categoria');

            $table->integer('cantidad_impresa')->nullable();
            $table->integer('cantidad_cd')->nullable();
            $table->string('url_digital')->nullable();

            $table->string('isbn');
            $table->string('costo_unitario');
            $table->string('precio_unitario');

            $table->string('codigo');
            $table->string('volumen')->nullable();
            $table->string('periodo')->nullable();
            $table->string('numero_edicion')->nullable();
            $table->string('autor')->nullable();
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('publicaciones');
    }
}

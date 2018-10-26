<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMaterialesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('materiales', function (Blueprint $table) {
            $table->increments('id');

            $table->string('codigo',128);
            $table->string('nombre',128);
            $table->string('descripcion')->nullable();
            $table->integer('cantidad');
            $table->integer('precio'); 

            $table->integer('rubros_id')->unsigned();

            $table->timestamps();

            $table->foreign('rubros_id')->references('id')->on('rubros')
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
        Schema::dropIfExists('materiales');
    }
}

<?php

use Illuminate\Database\Seeder;

class RubrosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Models\Rubro::create([
            'nombre'=>'Productos de papel y carton para oficina',
            'descripcion'=>'Productos como papeles, etc..',
            //'unidad_medida'=> 'Mts'
        ]);

        App\Models\Rubro::create([
            'nombre'=>'Utiles de escritorio',
            'descripcion'=>'utiles, etc..',
            //'unidad_medida'=> 'Mts'
        ]);
    }
}

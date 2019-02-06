import { Component, OnInit } from '@angular/core';
import { Publicacion } from 'src/app/Models/Publicacion';
import { NgForm } from '@angular/forms';
import { PublicacionesService } from 'src/app/services/admin/publicaciones.service';
import { SnotifyService } from 'ng-snotify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones-form',
  templateUrl: './publicaciones-form.component.html',
  styleUrls: ['./publicaciones-form.component.css']
})
export class PublicacionesFormComponent implements OnInit {

  loading:boolean=false;

  publicacion:Publicacion = {
    tema:null, 
    titulo:null, 
    fecha_elaboracion:null,
    descripcion:null, 
    departamento:null,
    origen:null,
    tipo_publicacion:'Seleccionar',
    categoria:null,
    cantidad_impresa:0,
    cantidad_cd:0,
    url_digital:null,
    isbn:null,
    costo_unitario:null,
    codigo:null,
    volumen:null,
    periodo:null,
    numero_edicion:null,
    autor:null,
    precio_unitario:null,
  };

  revista:boolean=false;
  libro:boolean=false;

  constructor(
    public publicacionesService:PublicacionesService,
    public snotify:SnotifyService,
    public router:Router
  ) { }

  ngOnInit() {
  }

  activarForm(event){

    console.log(event);

    if(event == 'Revista'){
      this.libro=false;
      this.revista=true;
    }

    if(event == 'Libro'){
      this.libro=true;
      this.revista=false;
    }

  }

  onSubmit(form:NgForm){

    console.log('form',form.value);
    console.log('this publicacion', this.publicacion);

    if(this.revista){
      if(!this.publicacion.numero_edicion || !this.publicacion.periodo || !this.publicacion.volumen){
        this.snotify.error('Es necesario ingresar toda la informacion de la revista', {timeout:0});
        return
      }
    }

    this.loading = true;

    this.publicacionesService.postPublicacion(this.publicacion).subscribe(
      data =>{
        console.log(data);
        this.updatePublicacionesList();
        this.loading = false;
        this.manageResponse(data);
        this.router.navigateByUrl('publicacionesModule/publicaciones');
      },
      error=>{
        console.log(error);
      }
    );

  }

  manageResponse(data){
    this.snotify.success(data.info);
    this.snotify.info('Puedes proceder a añadir stock en la opcion entradas');
  }

  updatePublicacionesList(){
    this.publicacionesService.getPublicaciones().subscribe(
      data => {
        //console.log(data);
        this.publicacionesService.publicaciones = data as Publicacion[];
      }
    );

  }

}

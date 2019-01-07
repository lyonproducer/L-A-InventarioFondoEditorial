import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SalidasService } from 'src/app/services/admin/salidas.service';
import { PublicacionesService } from 'src/app/services/admin/publicaciones.service';
import { Salida } from 'src/app/Models/Salida';
import { Venta } from 'src/app/Models/Venta';
import { Publicacion } from 'src/app/Models/Publicacion';
import { VentasService } from 'src/app/services/admin/ventas.service';
import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-salidas-form',
  templateUrl: './salidas-form.component.html',
  styleUrls: ['./salidas-form.component.css']
})
export class SalidasFormComponent implements OnInit {

  loading:boolean = false;
  isVenta:boolean= false;

  maxCantidad:number=0;

  salida:Salida = {
    sede:null,
    cliente:null,
    tipo_entrega:null
  }

  pub:Publicacion;

  publicaciones:any = {
    publicacion_id:null,
    //titulo:null,
    cantidad:null,
    tipo_cantidad:null
  }

  publicacion:any = {
    //titulo:null,
    publicacion_id:null,
    cantidad:null,
    tipo_cantidad:null
  }

  venta:Venta = {
    bauche:null, 
    banco:null, 
    monto_debito:null,
    monto_credito:0
  }

  titulos:any=[];

  tit:string;

  constructor(    
    public publicacionesService:PublicacionesService,
    public salidasService:SalidasService,
    public ventasService:VentasService,
    public router:Router,
    public snotify:SnotifyService
  ) { }

  ngOnInit(){
    this.updatePublicacionesList();
    this.publicaciones = [];
  }

  updatePublicacionesList(){
    this.publicacionesService.getPublicaciones().subscribe(
      data => {
        this.publicacionesService.publicaciones = data as Publicacion[];
      }
    );
  }

  updateVentasList(){
    this.ventasService.getVentas().subscribe(
      data=>{
        this.ventasService.ventas = data as Venta[];
      }
    );
  }

  max(){

    if(this.publicacion.tipo_cantidad == 'CD'){
      this.maxCantidad = this.pub.cantidad_cd;
      console.log('maximo cd',this.maxCantidad);
    }else{
      this.maxCantidad = this.pub.cantidad_impresa;
      console.log('maximo impreso',this.maxCantidad);
    }

  }

  asignPulicacionID(event){
    //console.log(event);
    for (let i =0 ; i < this.publicacionesService.publicaciones.length;i++){
      if (this.publicacionesService.publicaciones[i].titulo == event){

        this.publicacion.publicacion_id = this.publicacionesService.publicaciones[i].id;
        this.tit = this.publicacionesService.publicaciones[i].titulo;
        //this.publicacion.titulo = this.publicacionesService.publicaciones[i].titulo;

        this.pub = this.publicacionesService.publicaciones[i]; 
        console.log(this.pub);
        console.log(this.publicacion);
        //this.publicaciones.length

        if(this.publicacion.tipo_cantidad == 'CD'){
          this.maxCantidad = this.publicacionesService.publicaciones[i].cantidad_cd;
          console.log('maximo cd',this.maxCantidad);
        }else{
          this.maxCantidad = this.publicacionesService.publicaciones[i].cantidad_impresa;
          console.log('maximo impreso',this.maxCantidad);
        }
      }
    }
  }

  activeVenta(event){
    console.log(event);
    if(event == 'Venta'){
      this.isVenta = true;
    }else
    this.isVenta=false;
  }

  addPublicacion(){
    //console.log(this.publicacion);
    this.publicaciones.push(this.publicacion);
    this.titulos.push(this.tit);
    //console.log(this.titulos);
    this.publicacion = {
      publicacion_id:null,
      cantidad:null,
      tipo_cantidad:null
    }
  }

  onSubmit(){
    //console.log('publicaciones',this.publicaciones);
    //console.log('venta',this.venta);
    //console.log('salida',this.salida);

    if(this.salida.tipo_entrega == 'Venta'){
      //console.log('venta');

      if(this.venta.banco == null || this.venta.bauche == null  || this.venta.monto_credito == null  || this.venta.monto_debito==null){
        this.snotify.error('Ingrese todos los campos de venta');
        return;
      }
    }

    var data = {
      sede:this.salida.sede,
      cliente:this.salida.cliente,
      tipo_entrega:this.salida.tipo_entrega,
      publicaciones:this.publicaciones,
      venta:this.venta
    }
    console.log('mando data',data);

    this.salidasService.postSalida(data).subscribe(
      data=>{
        console.log(data);
        this.updatePublicacionesList();
        this.updateVentasList();
        this.router.navigateByUrl('publicacionesModule/salidas');
      }
    );


    //this.salida.push(this.publicaciones);

  }

}

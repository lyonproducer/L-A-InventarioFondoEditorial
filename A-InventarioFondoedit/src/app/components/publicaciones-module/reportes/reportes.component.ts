import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PublicacionesService } from 'src/app/services/admin/publicaciones.service';
import { Publicacion } from 'src/app/Models/Publicacion';

//declare var jsPDF: any;

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { SalidasService } from 'src/app/services/admin/salidas.service';
import { StocksService } from 'src/app/services/admin/stocks.service';
import { VentasService } from 'src/app/services/admin/ventas.service';
import { Venta } from 'src/app/Models/Venta';
import { Stock } from 'src/app/Models/Stock';
import { Salida } from 'src/app/Models/Salida';

//var jsPDF = require('jspdf');
//require('jspdf-autotable');

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {


  logoUneg:string;

  tipo_reporte:any=null;
  inicio:string;
  fin:string;

  constructor(
    public dialogRef: MatDialogRef<ReportesComponent>,
    public publicacionesService:PublicacionesService,
    public salidasService:SalidasService,
    public stockService:StocksService,
    public ventasService:VentasService,
  ) {
    this.logoUneg= 'data:image/jpeg;base64,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';

  }

  

  publicaciones :any =[];

  publicacionesColumns = [
    {title: "ISBN", dataKey: "isbn"},
    {title: "Titulo", dataKey: "titulo"},
    {title: "Publicación", dataKey: "tipo_publicacion"}, 
    {title: "Impreso", dataKey: "cantidad_impresa"},
  ];

  ventas :any =[];

  ventaColumns = [
    {title: "Bauche", dataKey: "bauche"},
    {title: "Banco", dataKey: "banco"},
    {title: "Monto Credito", dataKey: "monto_credito"}, 
    {title: "Monto Debito", dataKey: "monto_dedito"},
    {title: "Fecha", dataKey: "created_at"},
  ];

  salidas:any=[];

  salidasColumns = [
    {title: "Cliente", dataKey: "cliente"},
    {title: "Sede", dataKey: "sede"},
    {title: "Entrega", dataKey: "tipo_entrega"},
    {title: "Fecha", dataKey: "created_at"}, 
  ];

  stock:any=[];

  stockColumns = [
    {title: "Publicacion", dataKey: "titulo"},
    {title: "Tipo", dataKey: "tipo_cantidad"},
    {title: "Entrega", dataKey: "tipo_entrega"}, 
    {title: "Cantidad", dataKey: "cantidad"},
    {title: "Fecha", dataKey: "created_at"}, 
  ];



  ngOnInit() {
  }

  updatePublicacionesList(){
    this.publicacionesService.getPublicaciones().subscribe(
      data => {
        this.publicaciones = data as Publicacion[];
        console.log(this.publicaciones);
        this.PDFPublicaciones();
      }
    );
  }

  updateVentasList(){
    this.ventasService.getVentas().subscribe(
      data=>{
        console.log(data);
        this.ventas = data as Venta[];
        this.PDFVentas();
      }
    );
  }

  updateStockList(){
    this.stockService.getStocksReporte().subscribe(
      data => {

        this.stock = data as Stock[];
        console.log(data);
        this.PDFStock();
      }
    );
  }

  updateSalidasList(){
    this.salidasService.getSalidas().subscribe(
      data=>{
        console.log(data);
        this.salidas = data as Salida[];
        this.PDFSalidas();
      }
    );
  }

  generarPDF(){

    if(this.tipo_reporte=='Publicación'){
      this.updatePublicacionesList();
    }else

    if(this.tipo_reporte=='Entrada'){
      this.updateStockList();
    }else

    if(this.tipo_reporte=='Salida'){
      this.updateSalidasList();
    } else 

    if(this.tipo_reporte=='Venta'){
      this.updateVentasList();
    }


  }

  PDFPublicaciones(){
    var doc = new jsPDF('p', 'pt');
    
    doc.autoTable(this.publicacionesColumns, this.publicaciones, {
      margin: {top: 110},
      addPageContent: function() {
        doc.text("Inventario de Publicaciones", 205, 65);
      }
    });
    doc.addImage(this.logoUneg, 'JPEG', 65, 40, 40, 40);
    doc.save('Publicaciones.pdf');

  }

  PDFVentas(){
    var doc = new jsPDF('p', 'pt');
    
    doc.autoTable(this.ventaColumns, this.ventas, {
      margin: {top: 110},
      addPageContent: function() {
        doc.text("Lista de Ventas", 235, 65);
      }
    });
    doc.addImage(this.logoUneg, 'JPEG', 65, 40, 40, 40);
    doc.save('Ventas.pdf');

  }

  PDFSalidas(){
    var doc = new jsPDF('p', 'pt');
    
    doc.autoTable(this.salidasColumns, this.salidas, {
      margin: {top: 110},
      addPageContent: function() {
        doc.text("Lista de Salidas", 235, 65);
      }
    });
    doc.addImage(this.logoUneg, 'JPEG', 65, 40, 40, 40);
    doc.save('Salidas.pdf');

  }

  PDFStock(){
    var doc = new jsPDF('p', 'pt');
    
    doc.autoTable(this.stockColumns, this.stock, {
      margin: {top: 110},
      addPageContent: function() {
        doc.text("Lista de Entradas", 235, 65);
      }
    });
    doc.addImage(this.logoUneg, 'JPEG', 65, 40, 40, 40);
    doc.save('Entradas.pdf');

  }

}

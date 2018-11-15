import { Component, OnInit, Inject } from '@angular/core';
import { Stock } from 'src/app/Models/Stock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PublicacionesService } from 'src/app/services/admin/publicaciones.service';
import { StocksService } from 'src/app/services/admin/stocks.service';
import { Publicacion } from 'src/app/Models/Publicacion';
import { NgForm } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-stocks-form',
  templateUrl: './stocks-form.component.html',
  styleUrls: ['./stocks-form.component.css']
})
export class StocksFormComponent implements OnInit {

  loading:boolean = false;

  stock:Stock = {
    cantidad:null,
    tipo_entrega:null,
    tipo_cantidad:null,
    publicacion_id:null
  }

  constructor(    
    public dialogRef: MatDialogRef<StocksFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public publicacionesService:PublicacionesService,
    public stockService:StocksService,
    public snotify: SnotifyService
  ) { }

  ngOnInit() {
    this.updatePublicacionesList();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updatePublicacionesList(){
    this.publicacionesService.getPublicaciones().subscribe(
      data => {
        //console.log(data);
        this.publicacionesService.publicaciones = data as Publicacion[];
      }
    );
  }

  updateStockList(){
    this.stockService.getStocks().subscribe(
      data => {

        this.stockService.stocks = data as Stock[];
        console.log(data);
      }
    );
  }

  asignPulicacionID(event){
    console.log(event);
    for (let i =0 ; i < this.publicacionesService.publicaciones.length;i++){
      if (this.publicacionesService.publicaciones[i].titulo == event){
        this.stock.publicacion_id = this.publicacionesService.publicaciones[i].id;
        console.log(this.stock.publicacion_id);
        //return i;
      }
    }
  }

  onSubmit(form:NgForm){
    this.loading = true;
    console.log(form.value);

    this.stockService.postStock(form.value).subscribe(
      data=>{
        console.log(data);
        this.updatePublicacionesList();
        this.updateStockList();
        this.loading = false;
        this.snotify.success('agregado con exito',{timeout:0});
        this.closeDialog();
      }
    );
  }
}

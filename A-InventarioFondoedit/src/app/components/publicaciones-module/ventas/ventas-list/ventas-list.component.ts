import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/services/admin/ventas.service';
import { SnotifyService } from 'ng-snotify';
import { Venta } from 'src/app/Models/Venta';

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  p:number=1;
  
  constructor(
    public ventasService:VentasService,
    public notifyy:SnotifyService
  ) { }

  ngOnInit() {
    this.updateVentasList()
  }

  updateVentasList(){

    this.ventasService.getVentas().subscribe(
      data=>{
        console.log(data);
        this.ventasService.ventas = data as Venta[];
      }
    );
  }

}

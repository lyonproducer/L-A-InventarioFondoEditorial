import { Component, OnInit } from '@angular/core';
import { SalidasService } from 'src/app/services/admin/salidas.service';
import { Salida } from 'src/app/Models/Salida';
import { MatDialog } from '@angular/material/dialog';
import { SalidasFormComponent } from '../salidas-form/salidas-form.component';

@Component({
  selector: 'app-salidas-list',
  templateUrl: './salidas-list.component.html',
  styleUrls: ['./salidas-list.component.css']
})
export class SalidasListComponent implements OnInit {

  constructor(
    public salidasService:SalidasService,
  ) { }

  p:number=1;
  
  ngOnInit() {
    this.updateSalidasList();
  }

  updateSalidasList(){
    this.salidasService.getSalidas().subscribe(
      data=>{
        console.log(data);
        this.salidasService.salidas = data as Salida[];
      }
    );
  }

}

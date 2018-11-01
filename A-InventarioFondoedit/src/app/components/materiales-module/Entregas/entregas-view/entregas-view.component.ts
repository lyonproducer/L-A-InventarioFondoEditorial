import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-entregas-view',
  templateUrl: './entregas-view.component.html',
  styleUrls: ['./entregas-view.component.css']
})
export class EntregasViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EntregasViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  unidad_diseno:string;

  ngOnInit() {
    console.log(this.data);
    this.unidad_diseno=this.data.unidad_diseño; 
    //console.log(this.unidad_diseno);
  }

}

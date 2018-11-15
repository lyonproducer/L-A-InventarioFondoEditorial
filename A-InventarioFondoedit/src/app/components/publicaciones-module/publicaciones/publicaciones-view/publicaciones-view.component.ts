import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-publicaciones-view',
  templateUrl: './publicaciones-view.component.html',
  styleUrls: ['./publicaciones-view.component.css']
})
export class PublicacionesViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PublicacionesViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

}

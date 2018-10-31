import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-materiales-view',
  templateUrl: './materiales-view.component.html',
  styleUrls: ['./materiales-view.component.css']
})
export class MaterialesViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MaterialesViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    console.log(this.data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

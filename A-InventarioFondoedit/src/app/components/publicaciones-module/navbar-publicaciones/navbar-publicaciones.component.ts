import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportesComponent } from '../reportes/reportes.component';

@Component({
  selector: 'app-navbar-publicaciones',
  templateUrl: './navbar-publicaciones.component.html',
  styleUrls: ['./navbar-publicaciones.component.css']
})
export class NavbarPublicacionesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }


}

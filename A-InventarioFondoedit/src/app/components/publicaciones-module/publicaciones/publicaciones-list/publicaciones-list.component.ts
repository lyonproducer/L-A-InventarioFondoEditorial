import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from 'src/app/services/admin/publicaciones.service';
import { Publicacion } from 'src/app/Models/Publicacion';
import { SnotifyService } from 'ng-snotify';
import { MatDialog } from '@angular/material/dialog';
import { PublicacionesViewComponent } from '../publicaciones-view/publicaciones-view.component';

@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.css']
})
export class PublicacionesListComponent implements OnInit {

  constructor(
    public publicacionesService:PublicacionesService,
    public snotify: SnotifyService,
    public dialog: MatDialog
  ) { }

  p:number=1;
  
  ngOnInit() {
    this.publicacionesService.publicaciones = [];
    this.updatePublicacionesList();
  }

  updatePublicacionesList(){
    this.publicacionesService.getPublicaciones().subscribe(
      data => {
        //console.log(data);
        this.publicacionesService.publicaciones = data as Publicacion[];
      }
    );
  }

  deletePublicacion(id){
    this.publicacionesService.deletePublicacion(id).subscribe(
      data => {
        console.log(data);
        this.snotify.success('Publicacion eliminada', {timeout:0});
        this.updatePublicacionesList();
      }
    );
  }

  onViewPublicacion(publicacion){
    const dialogRef = this.dialog.open(PublicacionesViewComponent, {
      width: '75%',
      data: publicacion
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Material dialog was closed');
    });
  }

}

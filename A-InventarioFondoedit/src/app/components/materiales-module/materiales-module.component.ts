import { Component, OnInit } from '@angular/core';
import { MaterialesService } from 'src/app/services/admin/materiales.service';
import { Material } from 'src/app/Models/Material';
import { MatDialog } from '@angular/material/dialog';
import { MaterialesViewComponent } from './Materiales/materiales-view/materiales-view.component';
import { MaterialesFormComponent } from './Materiales/materiales-form/materiales-form.component';
import { EntradasService } from 'src/app/services/admin/entradas.service';
import { EntregasService } from 'src/app/services/admin/entregas.service';
import { Entrada } from 'src/app/Models/Entrada';
import { EntradasFormComponent } from './Entradas/entradas-form/entradas-form.component';
import { Entrega } from 'src/app/Models/Entrega';
import { EntregasFormComponent } from './Entregas/entregas-form/entregas-form.component';
import { EntregasViewComponent } from './Entregas/entregas-view/entregas-view.component';

@Component({
  selector: 'app-materiales-module',
  templateUrl: './materiales-module.component.html',
  styleUrls: ['./materiales-module.component.css']
})
export class MaterialesModuleComponent implements OnInit {

  entradas:any[];

  constructor(
    private materialesService: MaterialesService,
    public dialog: MatDialog,
    private entradasService:EntradasService,
    private entregasService:EntregasService
  ) { }

  ngOnInit() {
    this.updateMaterialesList();
    this.updateEntradasList();
    this.updateEntregasList();
  }

  //  //////////////////////////////////////////////////////
  //MATERIALES FUNCIONES
  // //////////////////////////////////////////////////////
  updateMaterialesList(){
    this.materialesService.getMaterialesList().subscribe(
      data => {
        this.materialesService.materiales = data as Material[];
      }
    );
  }

  onViewMaterial(material){
    const dialogRef = this.dialog.open(MaterialesViewComponent, {
      width: '45%',
      data: material
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Material dialog was closed');
    });
  }

  deleteMaterial(id:number){
    this.materialesService.deleteMaterial(id).subscribe(
      data =>{
        console.log(data);
        this.updateMaterialesList();
      },
      error=>{

      }
    );
  }

  openAddMaterialDialog(){
    const dialogRef = this.dialog.open(MaterialesFormComponent, {
      width: '45%',
      data: {editar:false}
    });
  }

  //  //////////////////////////////////////////////////////
  //Entradas FUNCIONES
  // //////////////////////////////////////////////////////

  updateEntradasList(){
    this.entradasService.getEntradas().subscribe(
      res=>{

        this.entradasService.entradas = res as Entrada[];
        console.log("dentro response entradas",this.entradasService.entradas);
      }
    );
  }

  openAddEntradaDialog(){
    const dialogRef = this.dialog.open(EntradasFormComponent, {
      width: '45%'
    });
  }

  ////////////////////////////////////////////////////////
  //Salidas FUNCIONES
  ///////////////////////////////////////////////////////
  updateEntregasList(){
    this.entregasService.getEntregas().subscribe(
      res=>{
        this.entregasService.entregas = res as Entrega[];
        console.log("dentro response entregas",this.entregasService.entregas);
      }
    );
  }

  openAddEntregaDialog(){
    const dialogRef = this.dialog.open(EntregasFormComponent, {
      width: '45%'
    });
  }

  onViewEntrega(entrega){
    const dialogRef = this.dialog.open(EntregasViewComponent, {
      width: '45%',
      data: entrega
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Material dialog was closed');
    });
  }
}

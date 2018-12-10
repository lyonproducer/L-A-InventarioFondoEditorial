import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialesService } from 'src/app/services/admin/materiales.service';
import { Entrada } from 'src/app/Models/Entrada';
import { EntradasService } from 'src/app/services/admin/entradas.service';
import { Material } from 'src/app/Models/Material';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-entradas-form',
  templateUrl: './entradas-form.component.html',
  styleUrls: ['./entradas-form.component.css']
})
export class EntradasFormComponent implements OnInit {

  loading:boolean=false;

  entrada:Entrada= {
    cantidad:null,
    material_id:null
  }

  constructor( 
    public dialogRef: MatDialogRef<EntradasFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materialesService:MaterialesService,
    private entradasService:EntradasService,
    public snotify:SnotifyService
  ) { }

  ngOnInit() {
    if(this.entradasService.editar==true){
      this.entrada = this.entradasService.entradaselected;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  asignEntradaID(event){
    console.log(event);

    for (let i =0 ; i < this.materialesService.materiales.length;i++){
      if (this.materialesService.materiales[i].nombre == event){
        this.entrada.material_id = this.materialesService.materiales[i].id;
        return i;
      }
    }
  }

  onSubmit(){
    this.loading=true;
    console.log(this.entrada);
    this.entradasService.postEntrada(this.entrada).subscribe(
      data=>{
        //console.log(data);
        this.updateEntradasList();
        this.updateMaterialesList();
        this.loading=false;
        this.snotify.success('Guardado entrada con exito');
        this.closeDialog();
      },
      error=>{
        this.snotify.error('Hubo un error, contacte con el desarrollador');
      }
    );
  }

  updateEntradasList(){
    this.entradasService.getEntradas().subscribe(
      res=>{

        this.entradasService.entradas = res as Entrada[];
        //console.log("dentro response",this.entradasService.entradas);
      }
    );
  }

  updateMaterialesList(){
    this.materialesService.getMaterialesList().subscribe(
      data => {
        this.materialesService.materiales = data as Material[];
      }
    );
  }
}

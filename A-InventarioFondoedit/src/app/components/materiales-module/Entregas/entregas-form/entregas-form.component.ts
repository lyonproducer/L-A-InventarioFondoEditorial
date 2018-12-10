import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialesService } from 'src/app/services/admin/materiales.service';
import { EntregasService } from 'src/app/services/admin/entregas.service';
import { Entrega } from 'src/app/Models/Entrega';
import { Material } from 'src/app/Models/Material';
import { NgForm } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-entregas-form',
  templateUrl: './entregas-form.component.html',
  styleUrls: ['./entregas-form.component.css']
})
export class EntregasFormComponent implements OnInit {

  entrega:Entrega={
    id:null,
    material_id:null,
    persona:null,
    cantidad:null,
    unidad_diseño:null,
    proyecto:null
  }

  maxCantidad:number=0;

  loading:boolean;
  unidad_diseno:string;

  constructor(    
    public dialogRef: MatDialogRef<EntregasFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materialesService:MaterialesService,
    private entregasService:EntregasService,
    public snotify:SnotifyService
    ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  asignEntregaID(event){
    //console.log(event);
    for (let i =0 ; i < this.materialesService.materiales.length;i++){
      if (this.materialesService.materiales[i].nombre == event){
        this.entrega.material_id = this.materialesService.materiales[i].id;
        this.maxCantidad = this.materialesService.materiales[i].cantidad;
        //console.log(this.maxCantidad);
        return i;
      }
    }
  }

  onSubmit(form:NgForm){

    this.entrega.unidad_diseño = form.value.unidad_diseño;
    //console.log(this.entrega);

    if(this.entrega.cantidad<=this.maxCantidad){
      this.loading=true;

      this.entregasService.postEntrega(this.entrega).subscribe(
        data=>{
          //console.log(data);
          this.updateEntregasList();
          this.updateMaterialesList();
          this.loading=false;
          this.snotify.success('Guardado entrega con exito');
          this.closeDialog();
        },
        error=>{
          this.snotify.error('Hubo un error, contacte con el desarrollador');
        }
      );
    }

  }

  updateEntregasList(){
    this.entregasService.getEntregas().subscribe(
      res=>{
        this.entregasService.entregas = res as Entrega[];
        //console.log("dentro response",this.entregasService.entregas);
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

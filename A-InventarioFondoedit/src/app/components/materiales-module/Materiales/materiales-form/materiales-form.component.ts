import { Component, OnInit, Inject } from '@angular/core';
import { Material } from 'src/app/Models/Material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RubrosService } from 'src/app/services/admin/rubros.service';
import { Rubro } from 'src/app/Models/Rubro';
import { MaterialesService } from 'src/app/services/admin/materiales.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materiales-form',
  templateUrl: './materiales-form.component.html',
  styleUrls: ['./materiales-form.component.css']
})
export class MaterialesFormComponent implements OnInit {

  loading:boolean=false;

  material:Material={

    id: null,
    rubro_id:null,
    codigo: null,
    nombre: null,
    descripcion: null,
    cantidad: 0,
    precio: null,
  };

  editar:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<MaterialesFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rubrosService:RubrosService,
    private materialesService:MaterialesService
  ) { }

  ngOnInit() {
    console.log("mando por dataDialog", this.data);
    this.updateRubros();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateRubros(){
    this.rubrosService.getRubros().subscribe(
      data=>{
        this.rubrosService.rubros = data as Rubro[];
      }
    );
  }

  asignRubroID(event){
    //console.log(event);
    for (let i =0 ; i < this.rubrosService.rubros.length;i++){
      if (this.rubrosService.rubros[i].nombre == event){
        this.material.rubro_id = this.rubrosService.rubros[i].id;
        return i;
      }
    }
  }

  onSubmit(form : NgForm){
    this.loading=true;
    console.log(form.value);
    console.log("material",this.material);

    this.materialesService.postMaterial(this.material).subscribe(
      data=>{
        console.log(data);
        this.loading=false;
        this.updateMaterialesList();
        this.closeDialog();
      },
      error=>{

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { Material } from 'src/app/Models/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {


  materiales:Material[];

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  getMaterialesList(){
    return this.http.get(this.variables.baseApi + '/materiales');
  }

  getMaterialesListReporte(data){
    return this.http.post(this.variables.baseApi + '/materialesReporte',data);
  }

  deleteMaterial(id : number){
    return this.http.delete(this.variables.baseApi + '/materiales/'+ id);
  }

  postMaterial(data:Material){
    return this.http.post(this.variables.baseApi + '/materiales',data);
  }

}

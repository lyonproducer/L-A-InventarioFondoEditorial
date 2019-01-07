import { Injectable } from '@angular/core';
import { Salida } from 'src/app/Models/Salida';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {

  salidas:Salida[];

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  getSalidas(){
    return this.http.get(this.variables.baseApi + '/salidas');
  }

  getSalidasReporte(){
    return this.http.get(this.variables.baseApi + '/salidasReporte');
  }

  postSalida(data){
    return this.http.post(this.variables.baseApi + '/salidas',data);
  }

}

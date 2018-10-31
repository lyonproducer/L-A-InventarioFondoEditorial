import { Injectable } from '@angular/core';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { HttpClient } from '@angular/common/http';
import { Entrada } from 'src/app/Models/Entrada';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  entradas:Entrada[];

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  getEntradas(){
    return this.http.get(this.variables.baseApi + '/entradas');
  }

  postEntrada(data){
    return this.http.post(this.variables.baseApi + '/entradas',data);
  }
  
}

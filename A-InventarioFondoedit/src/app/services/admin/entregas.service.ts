import { Injectable } from '@angular/core';
import { Entrega } from 'src/app/Models/Entrega';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class EntregasService {

  entregas:Entrega[];

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  getEntregas(){
    return this.http.get(this.variables.baseApi + '/entregas');
  }

  getEntregasReporte(data){
    return this.http.post(this.variables.baseApi + '/materialesEntregasReporte',data);
  }

  postEntrega(data:Entrega){
    return this.http.post(this.variables.baseApi + '/entregas',data);
  }
  
}

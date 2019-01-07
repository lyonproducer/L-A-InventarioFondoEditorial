import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { Venta } from 'src/app/Models/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ventas:Venta[];

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  getVentas(){
    return this.http.get(this.variables.baseApi + '/ventas');
  }

  getVentasReporte(data){
    return this.http.post(this.variables.baseApi + '/ventasReporte',data);
  }

  postVenta(data){
    return this.http.post(this.variables.baseApi + '/ventas',data);
  }

  deleteVenta(id){
    return this.http.delete(this.variables.baseApi + '/ventas/'+ id);
  }


}

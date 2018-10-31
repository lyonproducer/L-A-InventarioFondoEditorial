import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { Rubro } from 'src/app/Models/Rubro';

@Injectable({
  providedIn: 'root'
})
export class RubrosService {

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  rubros:Rubro[];

  getRubros(){
    return this.http.get(this.variables.baseApi + '/rubros');
  }


}

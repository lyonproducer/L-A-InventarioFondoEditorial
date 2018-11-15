import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../../components/global/variables/variables.component';
import { Stock } from '../../Models/Stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  stocks:Stock[];

  getStocks(){
    return this.http.get(this.variables.baseApi + '/stocks');
  }
  
}

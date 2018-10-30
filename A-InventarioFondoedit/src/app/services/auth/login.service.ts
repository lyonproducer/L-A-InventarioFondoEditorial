import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //baseURL = 'http://localhost:8000/api';
  baseURL:string;

  constructor(private http:HttpClient, private variables: VariablesComponent) {  }

  public signup (data){
    return this.http.post('http://localhost:8000/api/signup',data);
  }
  
  public login (data){
    return this.http.post(this.variables.baseApi + '/login',data);
  }

  public sendPaswordReset(data){
    return this.http.post('http://localhost:8000/api/sendPasswordResetLink',data);
  }

  public changePassword(data){
    return this.http.post(`${this.baseURL}/resetPassword`,data);
  }
}

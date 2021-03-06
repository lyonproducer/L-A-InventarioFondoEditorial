import { Injectable } from '@angular/core';
import { decode } from '@angular/router/src/url_tree';
import { VariablesComponent } from '../../components/global/variables/variables.component';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {

    //login : 'http://localhost:8000/api/login',
    //signup : 'http://localhost:8000/api/signup'

    //login : 'http://inventario-fondoedit.herokuapp.com/api/login',
    //signup : 'http://inventario-fondoedit.herokuapp.com/api/signup'

    login : this.variable.baseApi + '/login',
    signup : this.variable.baseApi + '/signup'
    
  };

  constructor(public variable:VariablesComponent) { }

  handle(token){
    this.set(token);
    //console.log(this.isValid());
  }

  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
    localStorage.removeItem('userFondoedit');
  }

  isValid(){
    //Verifica si el token recibido por el servicio es valido
    let token = this.get();

    if(token){
      return true;
      /*
      const payload = this.payload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
      */
    }

    return false;
  }

  payload(token){
    //funcion para recortar el token
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){

    return this.isValid();
  }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from 'src/app/components/global/variables/variables.component';
import { Publicacion } from 'src/app/Models/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(private http: HttpClient, private variables:VariablesComponent) { }

  publicaciones:Publicacion[];

  getPublicaciones(){
    return this.http.get(this.variables.baseApi + '/publicaciones');
  }

  postPublicacion(data){
    return this.http.post(this.variables.baseApi + '/publicaciones',data);
  }

  deletePublicacion(id){
    return this.http.delete(this.variables.baseApi + '/publicaciones/'+id);
  }
}

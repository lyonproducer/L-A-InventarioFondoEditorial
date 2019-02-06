import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  selector: 'app-variables',
})
export class VariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //public baseApi:string = 'http://localhost:8000/api';
  //public baseURL:string = 'http://localhost:8000';

  //public baseApi:string = 'back/api';
  //public baseURL:string = 'back';

  //public baseApi:string = 'http://inventario-fondoedit.herokuapp.com/api';
  //public baseURL:string = 'http://inventario-fondoedit.herokuapp.com/';

  public baseApi:string = 'http://172.20.70.28/pasantia/multimedia/inventario/back/api';
  public baseURL:string = 'http://172.20.70.28/pasantia/multimedia/inventario/back/';

  
  
}

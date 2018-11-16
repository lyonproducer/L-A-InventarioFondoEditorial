import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './test.component.html',
  selector: 'app-variables',
})
export class VariablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public baseApi:string = 'http://localhost:8000/api';
  public baseURL:string = 'http://localhost:8000';

}

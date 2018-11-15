import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones-module',
  templateUrl: './publicaciones-module.component.html',
  styleUrls: ['./publicaciones-module.component.css']
})
export class PublicacionesModuleComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.router.navigateByUrl('publicacionesModule/publicaciones');
  }

}

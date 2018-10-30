import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materiales-list',
  templateUrl: './materiales-list.component.html',
  styleUrls: ['./materiales-list.component.css']
})
export class MaterialesListComponent implements OnInit {

  constructor(public materialesService: MaterialesListComponent) { }

  ngOnInit() {
  }

}

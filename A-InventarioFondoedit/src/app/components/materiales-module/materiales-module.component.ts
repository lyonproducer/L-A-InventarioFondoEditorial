import { Component, OnInit } from '@angular/core';
import { MaterialesService } from 'src/app/services/admin/materiales.service';
import { Material } from 'src/app/Models/Material';

@Component({
  selector: 'app-materiales-module',
  templateUrl: './materiales-module.component.html',
  styleUrls: ['./materiales-module.component.css']
})
export class MaterialesModuleComponent implements OnInit {

  constructor(private materialesService: MaterialesService) { }

  ngOnInit() {
    this.MaterialesList();
  }

  MaterialesList(){
    this.materialesService.getMaterialesList().subscribe(
      data => {
        this.materialesService.materiales = data as Material[];
      }
    );
  }

}

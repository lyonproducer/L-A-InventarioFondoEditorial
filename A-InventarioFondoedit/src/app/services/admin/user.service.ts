import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { VariablesComponent } from '../../components/global/variables/variables.component';
import { User } from '../../Models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  
  constructor(
    private http: HttpClient,
    private variable:VariablesComponent
  ) { }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public form = {
    name:null,
    email:null,
    password:null,
    password_confirmation:null
  };
  
  public error = [];

  constructor(private loginService:LoginService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService 
            ) {  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile'); 
  }

  handleError(error){
    this.error = error.error.errors;

  }

}

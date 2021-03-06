import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  };


  public loading:boolean = false;

  public error:any = null;

  constructor(private loginService:LoginService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService 
            ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loading=true;
    this.loginService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.loading=false;
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.handleUser(data.user);
    this.router.navigateByUrl('/profile'); 
  }

  handleError(error){
    this.loading=false;
    this.error = error.error.error;
  }

  handleUser(user){
    let data:any = JSON.stringify(user);
    localStorage.setItem('userFondoedit',data);
  }
}

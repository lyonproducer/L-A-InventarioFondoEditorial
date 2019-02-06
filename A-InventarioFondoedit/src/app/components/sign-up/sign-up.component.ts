import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from '../../services/admin/user.service';

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
  
  public error:any = [];

  public loading : boolean = false;

  constructor(private loginService:LoginService,
              private token: TokenService,
              private router: Router,
              private auth: AuthService,
              private userService: UserService  
            ) {  }

  ngOnInit() {
  }

  onSubmit(){
    this.loading=true;
    this.loginService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.loading=false;
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
    this.userService.user = data.user;
    this.handleUser(data.user);  
  }

  handleError(error){
    this.loading=false;
    this.error = error.error.errors;

  }

  handleUser(user){
    
    let data:any = JSON.stringify(user);
    localStorage.setItem('userFondoedit',data)
  }

}

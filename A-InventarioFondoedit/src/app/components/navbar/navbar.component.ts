import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';
import { MatDialog } from '@angular/material/dialog';
import { ReportesComponent } from '../publicaciones-module/reportes/reportes.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  constructor(private auth: AuthService,
              private router: Router,
              private token:TokenService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);

  }

  logout(event: MouseEvent){

    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

  
  openReporte(){

    const dialogRef = this.dialog.open(ReportesComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Material dialog was closed');
    });
  }
}

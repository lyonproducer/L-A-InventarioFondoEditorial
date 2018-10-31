import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { TabsModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { BeforeLoginService } from './services/auth/before-login.service';
import { AfterLoginService } from './services/auth/after-login.service';

import { MaterialesViewComponent } from './components/materiales-module/Materiales/materiales-view/materiales-view.component';
import { MaterialesFormComponent } from './components/materiales-module/Materiales/materiales-form/materiales-form.component';
import { MaterialesModuleComponent } from './components/materiales-module/materiales-module.component';
import { VariablesComponent } from './components/global/variables/variables.component';
import { EntradasFormComponent } from './components/materiales-module/Entradas/entradas-form/entradas-form.component';
import { EntregasFormComponent } from './components/materiales-module/Entregas/entregas-form/entregas-form.component';
import { EntregasViewComponent } from './components/materiales-module/Entregas/entregas-view/entregas-view.component';

const routes: Route[] = [
  
  {path: 'login', component: LoginComponent, canActivate:[BeforeLoginService] },
  {path: 'signup', component: SignUpComponent, canActivate:[BeforeLoginService]},
  {path: 'profile', component: ProfileComponent, canActivate:[AfterLoginService]},
  {path: 'request-pass-reset', component: RequestResetComponent, canActivate:[BeforeLoginService]},
  {path: 'response-pass-reset', component: ResponseResetComponent, canActivate:[BeforeLoginService]},
  {path: 'materialesModule', component: MaterialesModuleComponent, canActivate:[AfterLoginService]},
];

@NgModule({
  entryComponents:[
    MaterialesViewComponent,
    MaterialesFormComponent,
    EntradasFormComponent,
    EntregasFormComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    MaterialesViewComponent,
    MaterialesFormComponent,
    MaterialesModuleComponent,
    EntradasFormComponent,
    EntregasFormComponent,
    EntregasViewComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    VariablesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

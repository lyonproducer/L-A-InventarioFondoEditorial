import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { TabsModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BeforeLoginService } from './services/auth/before-login.service';
import { AfterLoginService } from './services/auth/after-login.service';

import { MaterialesViewComponent } from './components/materiales-module/Materiales/materiales-view/materiales-view.component';
import { MaterialesFormComponent } from './components/materiales-module/Materiales/materiales-form/materiales-form.component';
import { MaterialesModuleComponent } from './components/materiales-module/materiales-module.component';
import { VariablesComponent } from './components/global/variables/variables.component';
import { EntradasFormComponent } from './components/materiales-module/Entradas/entradas-form/entradas-form.component';
import { EntregasFormComponent } from './components/materiales-module/Entregas/entregas-form/entregas-form.component';
import { EntregasViewComponent } from './components/materiales-module/Entregas/entregas-view/entregas-view.component';
import { PublicacionesModuleComponent } from './components/publicaciones-module/publicaciones-module.component';
import { NavbarPublicacionesComponent } from './components/publicaciones-module/navbar-publicaciones/navbar-publicaciones.component';
import { PublicacionesListComponent } from './components/publicaciones-module/publicaciones/publicaciones-list/publicaciones-list.component';
import { StocksListComponent } from './components/publicaciones-module/stocks/stocks-list/stocks-list.component';
import { PublicacionesFormComponent } from './components/publicaciones-module/publicaciones/publicaciones-form/publicaciones-form.component';
import { PublicacionesViewComponent } from './components/publicaciones-module/publicaciones/publicaciones-view/publicaciones-view.component';
import { SalidasListComponent } from './components/publicaciones-module/salidas/salidas-list/salidas-list.component';
import { VentasListComponent } from './components/publicaciones-module/ventas/ventas-list/ventas-list.component';
import { StocksFormComponent } from './components/publicaciones-module/stocks/stocks-form/stocks-form.component';
import { SalidasFormComponent } from './components/publicaciones-module/salidas/salidas-form/salidas-form.component';
import { TokenInterceptor } from './security/token.interceptor';
import { HomeComponent } from './components/home/home.component';
import { ReportesComponent } from './components/publicaciones-module/reportes/reportes.component';

const routes: Route[] = [
  
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate:[BeforeLoginService] },
  {path: 'signup', component: SignUpComponent, canActivate:[BeforeLoginService]},
  {path: 'profile', component: ProfileComponent, canActivate:[AfterLoginService]},
  {path: 'request-pass-reset', component: RequestResetComponent, canActivate:[BeforeLoginService]},
  {path: 'response-pass-reset', component: ResponseResetComponent, canActivate:[BeforeLoginService]},
  {path: 'materialesModule', component: MaterialesModuleComponent, canActivate:[AfterLoginService]},
  
  {
    path: 'publicacionesModule', 
    component: PublicacionesModuleComponent, 
    canActivate:[AfterLoginService],
    children:[
      {path: 'publicaciones', component: PublicacionesListComponent},
      {path: 'publicaciones/crear', component: PublicacionesFormComponent},
      {path: 'stocks', component: StocksListComponent},
      {path: 'salidas', component: SalidasListComponent},
      {path: 'salidas/create', component: SalidasFormComponent},
      {path: 'ventas', component: VentasListComponent}
    ] 
  },
  
];

@NgModule({
  entryComponents:[
    MaterialesViewComponent,
    MaterialesFormComponent,
    EntradasFormComponent,
    EntregasFormComponent,
    EntregasViewComponent,
    PublicacionesViewComponent,
    StocksFormComponent,
    ReportesComponent
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
    PublicacionesModuleComponent,
    NavbarPublicacionesComponent,
    PublicacionesListComponent,
    StocksListComponent,
    PublicacionesFormComponent,
    PublicacionesViewComponent,
    SalidasListComponent,
    VentasListComponent,
    StocksFormComponent,
    SalidasFormComponent,
    HomeComponent,
    ReportesComponent,
    VariablesComponent
    
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
    MatProgressBarModule,
    NgxPaginationModule,
    MatTooltipModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    VariablesComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

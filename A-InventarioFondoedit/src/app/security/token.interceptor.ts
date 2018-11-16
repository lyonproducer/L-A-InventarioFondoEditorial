import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';


import { Observable } from 'rxjs';
import { TokenService } from '../services/auth/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public token: TokenService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token.get()}`
      }
    });
    //console.log(request);
    return next.handle(request);
  }
}
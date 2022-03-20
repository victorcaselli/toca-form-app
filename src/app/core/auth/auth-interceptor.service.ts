import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("/oauth/token")){
      const authorization = "Basic "+btoa(environment.secret.username+":"+environment.secret.password);

      request = request.clone({
        setHeaders: {
          "Authorization": authorization,
          "Content-type": "application/x-www-form-urlencoded"
        }
      })


    }else if(!request.url.includes("enums/visitors") && this._authService.isAuthenticated()) {
      const token: string = "Bearer "+localStorage.getItem('token');

      request = request.clone({
        setHeaders: {
          authorization: token
        }
      })

    }






    return next.handle(request);
  }
}

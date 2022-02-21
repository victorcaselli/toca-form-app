import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("/oauth/token")){
      const authorization = "Basic "+btoa(environment.secret.username+":"+environment.secret.password);

      request = request.clone({
        setHeaders: {
          "Authorization": authorization,
          "Content-type": "application/x-www-form-urlencoded"
        }
      })


    }else{
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

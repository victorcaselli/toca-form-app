import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User, UserData} from "./login.types";
import {environment} from "../../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(
    private _http: HttpClient
  ) { }


  login(userData: UserData): Observable<User>{
      const data = `username=${userData.user}&password=${userData.password}&grant_type=${userData.grant_type}`;

     return this._http.post<User>(`${environment.api.main}/oauth/token`, data
     )
  }

  loginState(token:string): boolean{
    const jwtHelper = new JwtHelperService();

    if(token){
      return jwtHelper.isTokenExpired(token);
    }
    return true;
  }

}

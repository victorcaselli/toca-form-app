import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() { }


  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    if(token){
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }


  public getRoles(): string[] | null{
    const token = localStorage.getItem('token');

    if(token){
      const decoded = this.jwtHelper.decodeToken(token);

      return decoded.authorities;
    }

    return null;

  }
}

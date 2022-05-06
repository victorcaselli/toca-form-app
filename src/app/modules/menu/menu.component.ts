import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";
import {ROLES} from "./menu.keys";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(
  ): void {

  }

  public hiddenMenu(): boolean{
    return this._authService.isAuthenticated();
  }

  public logout():void{
    localStorage.removeItem("token");

  }


  public isAdmin(): boolean{
    const roles = this._authService.getRoles();

    if(roles){
      return roles.includes(ROLES.admin);
    }

    return false;
  }

}

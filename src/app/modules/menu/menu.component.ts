import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth/auth.service";

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

}

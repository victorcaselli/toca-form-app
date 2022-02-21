import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {User, UserData} from "./login.types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public data = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  });
  loading: boolean = false;
  message = {
    text: "Usuário ou senha incorretos",
    state: false
  }

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token && !this._loginService.loginState(token)){
        this._router.navigate(["/home"])
    }
  }

  login(): void {
    this.loading = true;
    if(!this.data.value.user && !this.data.value.password){
      return;
    }

    const userData: UserData = {
      user: this.data.value.user.toLowerCase(),
      password: this.data.value.password,
      grant_type: "password"
    }
    this._loginService.login(userData).subscribe(response => {
      this.loading = false;
      this.message.state = false;
      localStorage.setItem("token", response.access_token)
      this._router.navigate(["/home"])

    }, () => {
      this.message.state = true;
      this.loading = false;
    })
  }
}

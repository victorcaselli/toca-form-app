import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {

  }

}

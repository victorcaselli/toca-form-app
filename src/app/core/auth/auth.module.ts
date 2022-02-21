import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthInterceptor} from "./auth-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";



@NgModule({
  declarations: [],
  providers: [
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }

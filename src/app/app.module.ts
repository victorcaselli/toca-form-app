import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeModule } from './modules/home/home.module';
import {HttpClientModule} from "@angular/common/http";
import {MenuModule} from "./modules/menu/menu.module";
import {AuthModule} from "./core/auth/auth.module";
import {VisitorModule} from "./modules/visitor/visitor.module";
import {NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HomeModule,
    HttpClientModule,
    MenuModule,
    AuthModule,
    VisitorModule,
    NgxMaskModule.forRoot(
      {dropSpecialCharacters: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

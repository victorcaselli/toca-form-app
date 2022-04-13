import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import {VisitorRoutingModule} from "./visitor-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SpinnerLoadingModule} from "../../components/spinner-loading/spinner-loading.module";
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [
    VisitorComponent
  ],
    imports: [
        CommonModule,
        VisitorRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatSnackBarModule,
        SpinnerLoadingModule,
        NgxMaskModule
    ]
})
export class VisitorModule { }

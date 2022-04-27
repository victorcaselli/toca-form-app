import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorListComponent } from './visitor-list.component';
import {VisitorRoutingModule} from "./visitor-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {SimpleSpinnerModule} from "../../components/simple-spinner/simple-spinner.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {SpinnerLoadingModule} from "../../components/spinner-loading/spinner-loading.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    VisitorListComponent
  ],
    imports: [
        CommonModule,
        VisitorRoutingModule,
        MatInputModule,
        MatDividerModule,
        MatExpansionModule,
        SimpleSpinnerModule,
        MatIconModule,
        FormsModule,
        SpinnerLoadingModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class VisitorListModule { }

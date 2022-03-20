import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscipleListComponent } from './disciple-list.component';
import {DiscipleListRoutingModule} from "./disciple-list-routing.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {SimpleSpinnerModule} from "../../components/simple-spinner/simple-spinner.module";
import {CommonDialogModule} from "../../components/common-dialog/common-dialog.module";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    DiscipleListComponent
  ],
  imports: [
    CommonModule,
    DiscipleListRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    SimpleSpinnerModule,
    CommonDialogModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class DiscipleListModule { }

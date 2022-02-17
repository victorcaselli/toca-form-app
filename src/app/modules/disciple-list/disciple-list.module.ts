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
    MatButtonModule
  ]
})
export class DiscipleListModule { }

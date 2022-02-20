import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleSpinnerComponent } from './simple-spinner.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";



@NgModule({
  declarations: [
    SimpleSpinnerComponent
  ],
  exports: [
    SimpleSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class SimpleSpinnerModule { }

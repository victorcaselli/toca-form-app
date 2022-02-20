import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoadingComponent } from './spinner-loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    SpinnerLoadingComponent
  ],
  exports: [
    SpinnerLoadingComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class SpinnerLoadingModule { }

import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'spinner-loading',
  templateUrl: './spinner-loading.component.html',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor() { }

  ngOnInit(): void {
  }

}

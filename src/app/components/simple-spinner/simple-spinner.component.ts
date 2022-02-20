import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'simple-spinner',
  templateUrl: './simple-spinner.component.html',
  styleUrls: ['./simple-spinner.component.scss']
})
export class SimpleSpinnerComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;


  constructor() { }

  ngOnInit(): void {
  }

}

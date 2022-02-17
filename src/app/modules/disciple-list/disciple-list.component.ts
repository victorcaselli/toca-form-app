import { Component, OnInit } from '@angular/core';
import {DiscipleListService} from "./disciple-list.service";
import {Disciple} from "./disciples-list.types";

@Component({
  selector: 'app-disciple-list',
  templateUrl: './disciple-list.component.html',
  styleUrls: ['./disciple-list.component.scss']
})
export class DiscipleListComponent implements OnInit {
  panelOpenState: boolean = false;

  disciples: Disciple[] = [];

  constructor(
    private _discipleService: DiscipleListService
  ) { }

  ngOnInit(): void {
    this.getAllDisciples();
  }


  getAllDisciples(): void{
    this._discipleService.getAll().subscribe(response => {
      this.disciples = response;
    });
  }

  deleteById(id:string){
    return this._discipleService.deleteById(id).subscribe();
  }
}

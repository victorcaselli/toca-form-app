import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DiscipleListService} from "./disciple-list.service";
import {Disciple} from "./disciples-list.types";
import {MatDialog} from "@angular/material/dialog";
import {CommonDialogComponent} from "../../components/common-dialog/common-dialog.component";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-disciple-list',
  templateUrl: './disciple-list.component.html',
  styleUrls: ['./disciple-list.component.scss']
})
export class DiscipleListComponent implements OnInit {
  panelOpenState: boolean = false;

  disciples: Disciple[] | null = [];

  public loadingData:boolean = true;
  private _unsubscribeAll$: Subject<any> = new Subject<any>();


  constructor(
    private _discipleService: DiscipleListService,
    private _dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllDisciples();
  }


  getAllDisciples(): void{
    this._discipleService.getAll().subscribe();
    this._discipleService._disciples$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe((disciples: Disciple[] | null) => {
        if(!disciples){
            return;
        }
        this.loadingData = false;
        this.disciples = disciples;
      })
  }

  deleteById(id:string){
    this._dialog.open(CommonDialogComponent).afterClosed().subscribe(result => {
      if(result) {
        this._discipleService.deleteById(id).subscribe(() =>  this.getAllDisciples());

        this._changeDetectorRef.markForCheck();
      }
    })
  }
}

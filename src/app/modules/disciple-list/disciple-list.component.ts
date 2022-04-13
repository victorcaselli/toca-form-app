import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DiscipleListService} from "./disciple-list.service";
import {Disciple, SearchParams} from "./disciples-list.types";
import {MatDialog} from "@angular/material/dialog";
import {CommonDialogComponent} from "../../components/common-dialog/common-dialog.component";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-disciple-list',
  templateUrl: './disciple-list.component.html',
  styleUrls: ['./disciple-list.component.scss']
})
export class DiscipleListComponent implements OnInit {
  panelOpenState: boolean = false;

  disciples: Disciple[] | null = [];

  searchData: string = "";

  searchParams: SearchParams[] = [
    {code: '0', text: 'Nome'},
    // {code: '1', text: 'Endereço'},
    // {code: '2', text: 'Data de cadastro'}
  ]

  params: any;


  public loadingData:boolean = true;
  private _unsubscribeAll$: Subject<any> = new Subject<any>();


  constructor(
    private _discipleService: DiscipleListService,
    private _dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getAllDisciples();
    this.params = 0;
  }


  getAllDisciples(): void{

    if(!this.loadingData){
        this.loadingData = true;
    }

    this._discipleService.getAll(this.searchData).subscribe();
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
        this.loadingData = true;
        this._discipleService.deleteById(id).subscribe(() => {
          this.getAllDisciples();
          this.loadingData = false;
        });

        this._changeDetectorRef.markForCheck();
      }
    })
  }


  ageCalc(birthDate: string): number{
    const d: Date = new Date(birthDate);
    return new Date().getFullYear() - d.getFullYear();
  }

  edit(disciple: Disciple){
    this._router.navigate(['/home', {disciple: JSON.stringify(disciple)}])
  }
}

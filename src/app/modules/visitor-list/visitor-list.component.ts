import { Component, OnInit } from '@angular/core';
import {VisitorPayload} from "../visitor/visitor.types";
import {VisitorListService} from "./visitor-list.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Visitor} from "./visitor-list.types";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {CommonDialogComponent} from "../../components/common-dialog/common-dialog.component";

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements OnInit {

  loadingData: boolean = true;
  loading: boolean = false;
  panelOpenState: boolean = false;
  visitors: Visitor[] | null = [];
  searchData:string = "";

  private _unsubscribeAll$: Subject<any> = new Subject<any>();


  constructor(
    private _visitorsList: VisitorListService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllVisitors();
  }


  public getAllVisitors(): void {
    this._visitorsList.findAllVisitor(this.searchData).subscribe();

    this._visitorsList.visitorlist$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe(response => {
        this.visitors = response;
        this.loadingData = false;
      })

  }


  deleteById(visitorId: string): void {
    this._dialog.open(CommonDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        this.loadingData = true;
        this._visitorsList.deleteById(visitorId).subscribe(() => this.getAllVisitors());

      }
    });
  }

  generateDisciple(visitorId: string){
    this.loading = true;
    this._visitorsList.generateDisciple(visitorId).subscribe(() => {
      this.getAllVisitors()
      this.loading = false;
      this.openSaveSnackBar("Discipulo Gerado com sucesso!")
    });
  }

  ageCalc(birthDate: string): number{
    const d: Date = new Date(birthDate);
    return new Date().getFullYear() - d.getFullYear();
  }


  private  openSaveSnackBar(message:string): void{
    this._snackBar.open(message, "fechar", {
      duration: 3000
    })
  }

}

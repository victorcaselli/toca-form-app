import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {VisitorService} from "./visitor.service";
import {Enumeration, VisitorPayload} from "./visitor.types";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {

  visitorType: Enumeration[];
  private _unsubscribeAll$: Subject<any> = new Subject<any>();
  public loading:boolean = false;

  public data = new FormGroup({
    name: new FormControl(''),
    birthDate: new FormControl(new Date()),
    phone: new FormControl(''),
    visitorType: new FormControl(0)
  });

  constructor(
    private _visitorService: VisitorService,
    private _snackBar: MatSnackBar,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this._visitorService.getVisitorsEnumeration().subscribe();
    this._visitorService.enumeration$
      .pipe(takeUntil(this._unsubscribeAll$))
      .subscribe( (data) => {
        if(data == null){
          return;
        }
        this.visitorType = data;
        this.loading = false;
      })
  }


  save(): void{
    this.loading = true;
    const visitor: VisitorPayload = {...this.data.value};
    this._visitorService.save(visitor).subscribe(() => {
      this.loading = false;
      this.openSaveSnackBar("Salvo com sucesso!");
      this.data.reset();
    }, error => {
      this.loading = false;
      this.openSaveSnackBar("Erro ao salvar")
    });
  }

  private  openSaveSnackBar(message:string): void{
    this._snackBar.open(message, "fechar", {
      duration: 3000
    })
  }


  showLogo(): boolean{
    return this.auth.isAuthenticated();
  }


}

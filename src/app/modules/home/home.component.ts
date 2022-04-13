import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {Subject} from "rxjs";
import {DisciplePayload, Enumeration} from "./home.types";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Phone} from "./model/phone.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {Disciple} from "../disciple-list/disciples-list.types";
import {DiscipleModel} from "./model/disciple.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _unsubscribeAll$: Subject<any> = new Subject<any>();
  public form = new FormControl();
  public data = new FormGroup({
  name: new FormControl(''),
  birthDate: new FormControl(new Date()),
  address: new FormControl(''),
  district: new FormControl(''),
  decisionType: new FormControl(0),
  churchStatus: new FormControl(0),
  christeningStatus: new FormControl(0),
  details: new FormControl(''),
  phone: new FormControl('')
  });

  public churchStatusEnum: Enumeration[];
  public decisionEnum: Enumeration[];
  public christeningEnum: Enumeration[];
  public disciple: Disciple;
  public loading:boolean = false;

  constructor(
    private _homeService: HomeService,
    private _snackBar: MatSnackBar,
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this._homeService._disciple$
    //   .pipe(takeUntil(this._unsubscribeAll$))
    //   .subscribe(response => {
    //   if(response === null){
    //     return;
    //   }
    //
    //   console.log(response;
    // })

    const enums = [
      'church',
      'decision',
      'christening'
    ]

    this.disciple = JSON.parse(<string>this._activateRoute.snapshot.paramMap.get("disciple"));

    if(this.disciple){


      enums.forEach(enumeration => {
        this._homeService.getEnumeration({param: enumeration})?.subscribe(response => {
          if (enumeration == "church") {
            this.churchStatusEnum = response;
          }

          if (enumeration == 'decision') {
            this.decisionEnum = response;
          }

          if (enumeration == 'christening') {
            this.christeningEnum = response;
          }

          this.setData(this.disciple);
        })

      })
    }else{
      enums.forEach(enumeration => {
        this._homeService.getEnumeration({param: enumeration})?.subscribe(response => {
          if (enumeration == "church") {
            this.churchStatusEnum = response;
          }

          if (enumeration == 'decision') {
            this.decisionEnum = response;
          }

          if (enumeration == 'christening') {
            this.christeningEnum = response;
          }
        })

      })
    }

  }




  public save(){

    if(!this.data.valid){
        return;
    }


    this.loading = true;

    const disciple: DisciplePayload = {...this.data.value};

    if(this.disciple && this.disciple.id){
      disciple.id = this.disciple.id;
    }

    // let phone:Phone = new Phone();
    //
    // phone.ddd = this.data.value.ddd;
    // phone.number = this.data.value.phone;
    // phone.whatsapp = '0';
    // phone.phoneType = '0';
    //
    //
    // disciple.phones = [phone];



    this._homeService.save(disciple).subscribe(response => {
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



  private setData(disciple:Disciple): void{
    const properties: string[] = Object.getOwnPropertyNames(disciple);

    for(let prop of properties ) {
      let val = null;
      Object.entries(disciple).forEach(result => {
        if(result[0] === prop){
          val = result[1];

          if(prop === 'decisionType' && this.decisionEnum){
            this.decisionEnum.forEach(object => {
              if(object.description === result[1]){
                  val = object.code;
              }
            })
          }

          if(prop === 'churchStatus' && this.churchStatusEnum){
            this.churchStatusEnum.forEach(object => {
              if(object.description === result[1]){
                val = object.code;
              }
            })
          }

          if(prop === 'christeningStatus' && this.christeningEnum){
            this.christeningEnum.forEach(object => {
              if(object.description === result[1]){
                val = object.code;
              }
            })
          }

        }
      })


      this.data.get(prop)?.setValue(val);
    }




  }
}

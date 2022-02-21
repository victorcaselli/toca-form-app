import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {Subject} from "rxjs";
import {DisciplePayload, Enumeration} from "./home.types";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Phone} from "./model/phone.model";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  age: new FormControl(''),
  birthDate: new FormControl(new Date()),
  address: new FormControl(''),
  district: new FormControl(''),
  decisionType: new FormControl(0),
  churchStatus: new FormControl(0),
  christeningStatus: new FormControl(0),
  details: new FormControl(''),
  phone: new FormControl(''),
  ddd: new FormControl('')
  });

  public churchStatusEnum: Enumeration[];
  public decisionEnum: Enumeration[];
  public christeningEnum: Enumeration[];

  public loading:boolean = false;

  constructor(
    private _homeService: HomeService,
    private _snackBar: MatSnackBar
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
      'phone',
      'christening',
      'whatsapp',
    ]

    enums.forEach(enumeration => {
      this._homeService.getEnumeration({param: enumeration})?.subscribe(response => {
        if(enumeration == "church"){
          this.churchStatusEnum = response;
        }

        if(enumeration == 'decision'){
          this.decisionEnum = response;
        }

        if(enumeration == 'christening'){
          this.christeningEnum = response;
        }
      })

    })
  }



  public save(){

    if(!this.data.valid){
        return;
    }

    this.loading = true;

    const disciple:DisciplePayload = {...this.data.value};

    let phone:Phone = new Phone();

    phone.ddd = this.data.value.ddd;
    phone.number = this.data.value.phone;
    phone.whatsapp = '0';
    phone.phoneType = '0';


    disciple.phones = [phone];

    this.data.reset();

    this._homeService.save(disciple).subscribe(response => {
      this.loading = false;
      this.openSaveSnackBar("Salvo com sucesso!");
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
}

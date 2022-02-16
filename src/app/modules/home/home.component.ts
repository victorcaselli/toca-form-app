import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {Subject} from "rxjs";
import {DisciplePayload, Enumeration} from "./home.types";
import {takeUntil} from "rxjs/operators";
import {DiscipleModel} from "./model/disciple.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Phone} from "./model/phone.model";

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
  });

  public churchStatusEnum: Enumeration[];
  public decisionEnum: Enumeration[];
  public christeningEnum: Enumeration[];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    // this.homeService._disciple$
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
      this.homeService.getEnumeration({param: enumeration})?.subscribe(response => {
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
    const disciple:DisciplePayload = this.data.value
    this.homeService.save(disciple).subscribe();

  }


}

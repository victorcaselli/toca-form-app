import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DisciplePayload, Enumeration, EnumerationParam} from "./home.types";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _disciple: BehaviorSubject<DisciplePayload | null> = new BehaviorSubject<DisciplePayload | null>(null);
  private _enumeration: BehaviorSubject<Enumeration[] | null> = new BehaviorSubject<Enumeration[] | null>(null);

  constructor(
    private _http: HttpClient
  ) { }

  get _disciple$():Observable<DisciplePayload | null>{
    return this._disciple.asObservable();
  }

  get _enumerations$(): Observable<Enumeration[] | null>{
    return this._enumeration.asObservable();
  }

  save(data: DisciplePayload): Observable<DisciplePayload>{
    return this._http.post<DisciplePayload>(`http://localhost:8080/api/disciples`, data)
      .pipe(
        tap((object: DisciplePayload) => {
          this._disciple.next(object);
          return object;
    })
      );
  }

  getEnumeration(data: EnumerationParam){

    if(data.param == null){
      return;
    }

    return this._http.get<Enumeration[]>(`http://localhost:8080/api/enums?${data.param}=true`)
      .pipe(
        tap((object:Enumeration[]) =>{
          this._enumeration.next(object);
          return object;
        })
      )

  }

}

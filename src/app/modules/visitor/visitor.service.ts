import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Enumeration, VisitorPayload} from "./visitor.types";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  public _visitor: BehaviorSubject<VisitorPayload | null> = new BehaviorSubject<VisitorPayload | null>(null);
  public _enumeration: BehaviorSubject<Enumeration[] | null> = new BehaviorSubject<Enumeration[] | null>(null);

  constructor(
    private _http: HttpClient
  ) { }


  get visitor$(): Observable<VisitorPayload | null> {
    return this._visitor.asObservable();
  }

  get enumeration$(): Observable<Enumeration[] | null > {
    return this._enumeration.asObservable();
  }

  save(data: VisitorPayload): Observable<VisitorPayload>{
    return this._http.post<VisitorPayload>(`${environment.api.main}/api/visitors`, data)
      .pipe(
        tap((object: VisitorPayload) => {
          this._visitor.next(object)
          return object;
        })
      )
  }

  getVisitorsEnumeration(): Observable<Enumeration[]>{
    return this._http.get<Enumeration[]>(`${environment.api.main}/api/enums/visitors`)
      .pipe(
        tap((object: Enumeration[]) => {
          this._enumeration.next(object);
          return object;
        })
      );
  }


}

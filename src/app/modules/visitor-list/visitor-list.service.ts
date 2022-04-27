import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {VisitorPayload} from "../visitor/visitor.types";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {tap} from "rxjs/operators";
import {Visitor} from "./visitor-list.types";

@Injectable({
  providedIn: 'root'
})
export class VisitorListService {

  public _visitorList: BehaviorSubject<Visitor[] | null> = new BehaviorSubject<Visitor[] | null>(null);

  constructor(
    private _http: HttpClient
  ) { }


  get visitorlist$(): Observable<Visitor[] | null> {
    return this._visitorList.asObservable();
  }


  public findAllVisitor(searchData: string): Observable<Visitor[]> {
    return this._http.get<Visitor[]>(`${environment.api.main}/api/visitors/search?name=${searchData}`)
      .pipe(
        tap((object: Visitor[]) => {
            this._visitorList.next(object)
          return object;
        })
      )
  }


  public deleteById(visitorId: string): Observable<any>{
   return this._http.delete(`${environment.api.main}/api/visitors/${visitorId}`)
  }

  public generateDisciple(visitorId: string): Observable<any> {
    return this._http.get(`${environment.api.main}/api/visitors/disciple/${visitorId}`)
  }


}

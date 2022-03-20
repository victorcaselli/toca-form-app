import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Disciple} from "./disciples-list.types";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DiscipleListService {

  private _discipleList: BehaviorSubject<Disciple[] | null> = new BehaviorSubject<Disciple[] | null>(null);

  constructor(
    private _http: HttpClient
  ) { }

  get _disciples$(): Observable<Disciple[] | null>{
    return this._discipleList.asObservable();
  }

  getAll(searchData: string): Observable<Disciple[]>{
    return this._http.get<Disciple[]>(`${environment.api.main}/api/disciples/search?name=${searchData}`)
      .pipe(
        tap((object: Disciple[]) => {
            this._discipleList.next(object)
            return object;
        })
      )
  }


  deleteById(id:string): Observable<any>{
    return this._http.delete(`${environment.api.main}/api/disciples/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountHistoryService {
  private urlApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/account'
  constructor(private _http:HttpClient) { }

  public getAccountById(id: string): Observable<any> {
    const apiUrl = `${this.urlApi}/${id}`;
    return this._http.get<any>(apiUrl);
  }
  
}

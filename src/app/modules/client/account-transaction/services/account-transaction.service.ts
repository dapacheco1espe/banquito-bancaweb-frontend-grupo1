import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {

  private urlApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/account';
  
  constructor(private _http:HttpClient) { }

  
  public getAccountByCodeInternal(codeInternal: string): Observable<any> {
    const urlWithParams = `${this.urlApi}?codeInternalAccount=${codeInternal}`;
    return this._http.get(urlWithParams);
  }
}

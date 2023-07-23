import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountDestination } from '../../Models/AccountDestination';
@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {

  private urlApi='http://localhost:9003/api/v1/accounts/account-internalcode';


  constructor(private _http:HttpClient) { }

  
  public getAccountByCodeInternal(internalAccountCode: string): Observable<AccountDestination> {
    const urlWithParams = `${this.urlApi}/${internalAccountCode}`;
    return this._http.get<AccountDestination>(urlWithParams);
  }
}

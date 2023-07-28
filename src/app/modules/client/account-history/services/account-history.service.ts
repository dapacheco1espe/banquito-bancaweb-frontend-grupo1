import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountTransaction } from '../../Models/AccountTransaction';
@Injectable({
  providedIn: 'root'
})
export class AccountHistoryService {
  private urlApi='http://localhost:9003/api/v1/transactions/history-transaction';

  private _accountTransaction:BehaviorSubject<AccountTransaction[]> = new BehaviorSubject<AccountTransaction[]>([]);

  constructor(private _http:HttpClient) { }

  public getHistoryAccount(acountUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/${acountUK}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._accountTransaction.next(response);
      })
    );
  }
  
  
}

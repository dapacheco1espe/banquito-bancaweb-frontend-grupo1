import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountTransaction } from '../../Models/AccountTransaction';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountHistoryService {
  private urlApi='';

  private _accountTransaction:BehaviorSubject<AccountTransaction[]> = new BehaviorSubject<AccountTransaction[]>([]);

  constructor(private _http:HttpClient) {
    this.urlApi=environment.urlApiAccountTransaction;
   }

   public getHistoryAccount(acountUK: String, startDate?: Date, endDate?: Date): Observable<any> {
    let urlWithParams = `${this.urlApi}/history-transaction/${acountUK}`; 
    if (startDate && endDate) {
      urlWithParams += `?startDate=${startDate.getTime()}&endDate=${endDate.getTime()}`;
      
    }
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._accountTransaction.next(response);
      })
    );
  }
  
  
  
  
}

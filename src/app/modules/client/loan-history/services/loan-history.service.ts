import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoanTransaction } from '../../Models/LoanTransaction';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {
  
  private urlApi='http://localhost:9003/api/v1/repayment';

  private _loanTransaction:BehaviorSubject<LoanTransaction[]> = new BehaviorSubject<LoanTransaction[]>([]);


  constructor(
    private _http:HttpClient
  ) { }
  

  public getHistoryLoan(acountUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/${acountUK}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._loanTransaction.next(response);
      })
    );
  }

}

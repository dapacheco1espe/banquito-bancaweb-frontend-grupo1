import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoanTransaction } from '../../Models/LoanTransaction';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {
  
  private urlApi='';

  private _loanTransaction:BehaviorSubject<LoanTransaction[]> = new BehaviorSubject<LoanTransaction[]>([]);


  constructor(
    private _http:HttpClient
  ) {
    this.urlApi=environment.urlApiLoanRepayment;
   }
  

  public getHistoryLoan(acountUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/${acountUK}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._loanTransaction.next(response);
      })
    );
  }

}

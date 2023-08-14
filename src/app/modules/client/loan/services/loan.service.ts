import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../../Models/Loan';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private _loans:BehaviorSubject<Loan[]> = new BehaviorSubject<Loan[]>([]);

  private urlApi='http://localhost:9003/api/v2/loans';

  constructor(
    private _http:HttpClient
  ) { }

  get loans$():Observable<Loan[]>{

    return this._loans.asObservable();
  }

  public getUserLoans(customerUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/loans-client/${customerUK}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._loans.next(response);
      })
    );
  }

  public createLoan(accountId: number,guarantyId: number, branchId: number,loanProductId: String, accountHolderType: String,amount: number,customerId: String): Observable<any> {
    const loanData = {
      accountId: accountId,
      guarantyId: guarantyId,
      branchId: branchId,
      loanProductId: loanProductId,
      accountHolderType: accountHolderType,
      state: "",
      name: "",
      amount: amount,
      principalPaid: 0,
      interestPaid: 0,
      penalityPaid: 0,
      repaymentPeriodCount: 0,
      repaymentPeriodUnit: 0
    };

    return this._http.post(this.urlApi, loanData).pipe(
      tap(response => {
        this.getUserLoans(customerId).subscribe();
      })
    );
  }

  
  
}

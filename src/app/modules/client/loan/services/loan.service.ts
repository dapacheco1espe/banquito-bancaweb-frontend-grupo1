import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../../Models/Loan';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private _loans:BehaviorSubject<Loan[]> = new BehaviorSubject<Loan[]>([]);

  private urlApi='';
private jwt='';

  constructor(
    private _http:HttpClient
  ) {
    this.jwt=environment.apiSecurity;
    this.urlApi=environment.urlApiLoan;
  }

  get loans$():Observable<Loan[]>{

    return this._loans.asObservable();
  }


  public getUserLoans(customerUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/getLoansByAccount/${customerUK}${this.jwt}`;
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

    return this._http.post(`${this.urlApi}${this.jwt}` , loanData).pipe(
      tap(response => {
        this.getUserLoans(customerId).subscribe();
      })
    );
  }



}

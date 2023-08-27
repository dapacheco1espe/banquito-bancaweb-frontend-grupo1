import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanAmortizationService {

  private urlApi='';
  private urlApiLoan='';

  constructor(private _http:HttpClient) {
    this.urlApi=environment.urlApiLoanAmortization;
    this.urlApiLoan=environment.urlApiLoan;
   }

  public getAmortization(type: string,amount: number,repaymentInstallments: number ): Observable<any> {
    const urlWithParams = `${this.urlApi}/simulate`; 
    const amortizationData = {
      type: type,
      amount: amount,
      repaymentInstallments:repaymentInstallments,
      
    };

    return this._http.post(urlWithParams, amortizationData).pipe(
      tap(response => {
        
      })
    );
  }
  public createLoan(accountId: number, branchId: number,loanProductId: string,accountHolderType: string,name: string,ammount:number,repaymentPeriodCount:number,repaymentPeriodUnit:string): Observable<any> {
    const transactionData = {
      accountId: accountId,
      branchId: branchId,
      loanProductId: loanProductId,
      accountHolderType: accountHolderType,
      name: name,
      ammount:ammount,
      repaymentPeriodCount:repaymentPeriodCount,
      repaymentPeriodUnit:repaymentPeriodUnit
    };
    const urlWithParams = `${this.urlApiLoan}`;
    return this._http.post(urlWithParams, transactionData).pipe(
      map(response => {
        //console.log(ammount);
      })
    );
  }
}

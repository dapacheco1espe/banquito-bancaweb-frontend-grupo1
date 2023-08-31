import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanAmortizationService {

  private urlApiLoanAmortization='';
  private urlApiLoan='';
  private jwt='';

  constructor(private _http:HttpClient) {
    this.urlApiLoanAmortization=environment.urlApiLoanAmortization;
    this.urlApiLoan=environment.urlApiLoan;
    this.jwt=environment.apiSecurity;
   }

  public getAmortization(type: string,amount: number,repaymentInstallments: number ): Observable<any> {
    const urlWithParams = `${this.urlApiLoanAmortization}/simulate${this.jwt}`; 
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
  public generateAmortization(loanId: number,type: string ): Observable<any> {
    const urlWithParams = `${this.urlApiLoanAmortization}/generate${this.jwt}`; 
    const loanData = {
      type: type,
      loanId: loanId,
      
    };

    return this._http.post(urlWithParams, loanData).pipe(
      tap(response => {
        
      })
    );
  }
  public createLoan(accountId: number, branchId: number,loanProductId: string,accountHolderType: string,name: string,amount:number,repaymentPeriodCount:number,repaymentPeriodUnit:string): Observable<any> {
    const transactionData = {
      accountId: accountId,
      branchId: branchId,
      loanProductId: loanProductId,
      accountHolderType: accountHolderType,
      name: name,
      amount:amount,
      repaymentPeriodCount:repaymentPeriodCount,
      repaymentPeriodUnit:repaymentPeriodUnit
    };
    const urlWithParams = `${this.urlApiLoan}${this.jwt}`;
    return this._http.post(urlWithParams, transactionData);
  }
}

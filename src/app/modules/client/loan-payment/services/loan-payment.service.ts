import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanPaymentService {

  private urlApiLoanRepayment='';
  private urlApiTransaction='';
  private urlApiAmortization='';
  private jwt='';


  constructor(
    private _http:HttpClient
  ) {
    this.urlApiLoanRepayment=environment.urlApiLoanRepayment;
    this.urlApiTransaction=environment.urlApiAccountTransaction;
    this.urlApiAmortization=environment.urlApiLoanAmortization;
    this.jwt=environment.apiSecurity;
   }


  public createPaymentLoan(accountTransactionId: number,amortizationUuid: string,branchId: number, amountToPay: number ): Observable<any> {
    const paymentData = {
      accountTransactionId: accountTransactionId,
      amortizationUuid: amortizationUuid,
      branchId: branchId,
      amountToPay: amountToPay,
    };
    const urlWithParams = `${this.urlApiLoanRepayment}/doPay${this.jwt}`;
    return this._http.post(urlWithParams, paymentData).pipe(
      map(response => {
        //console.log(ammount); 
      })
    );
  }
  public createTransacctionAccount(ammount: number, creditorAccount: string,debtorAccount: string,notes: string): Observable<any> {
    const transactionData = {
      reference: '',
      ammount: ammount,
      creditorBankCode: 'BANQ',
      creditorAccount: creditorAccount,
      debtorBankCode: 'BANQ',
      debtorAccount: debtorAccount,
      transactionType: 'LOAN_REPAID',
      notes: notes
    };
    console.log(transactionData.transactionType);
    const urlWithParams = `${this.urlApiTransaction}/transaction${this.jwt}`;
    return this._http.post(urlWithParams, transactionData);
    
  }

  findByLoanAndQuotaStatus(uuid: String, quotaStatus: string): Observable<any> {
    const urlWithParams = `${this.urlApiAmortization}/findByLoan-status/${uuid}/${quotaStatus}${this.jwt}`;
    return this._http.get(urlWithParams);
  }

  
}


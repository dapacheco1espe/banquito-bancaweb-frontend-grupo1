import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanPaymentService {

  private urlApi='';
  private urlApiTransaction='';


  constructor(
    private _http:HttpClient
  ) {
    //this.urlApi=environment.urlApiLoanRepayment;
    this.urlApiTransaction=environment.urlApiAccountTransaction;
   }


  public createPaymentLoan(accountId: number,amortizationUuid: String,branchId: number, amountToPay: number ): Observable<any> {
    const paymentData = {
      accountTransactionId: accountId,
      amortizationUuid: amortizationUuid,
      branchId: branchId,
      amountToPay: amountToPay,
    };
    const urlWithParams = `${this.urlApi}/doPay`;
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
    const urlWithParams = `${this.urlApiTransaction}/transaction`;
    return this._http.post(urlWithParams, transactionData).pipe(
      map(response => {
      })
    );
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanPaymentService {

  private urlApi='http://localhost:9003/api/v1/repayment';


  constructor(
    private _http:HttpClient
  ) { }


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
}

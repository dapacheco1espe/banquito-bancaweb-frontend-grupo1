import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountDestination } from '../../Models/AccountDestination';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccountTransactionService {

  private urlApi='';
 private urlApiTransaction='';
 private jwt='';

  constructor(private _http:HttpClient) {
    this.urlApi=environment.urlApiAccount;
    this.urlApiTransaction=environment.urlApiAccountTransaction;
    this.jwt=environment.apiSecurity;
   }

  
  public getAccountByCodeInternal(internalAccountCode: string): Observable<AccountDestination> {
    const urlWithParams = `${this.urlApi}/account-internalcode/${internalAccountCode}${this.jwt}`;
    return this._http.get<AccountDestination>(urlWithParams);
  }

  public createTransacctionAccount(ammount: number, creditorAccount: string,debtorAccount: string,notes: string): Observable<any> {
    const transactionData = {
      reference: '',
      ammount: ammount,
      creditorBankCode: 'BANQ',
      creditorAccount: creditorAccount,
      debtorBankCode: 'BANQ',
      debtorAccount: debtorAccount,
      transactionType: 'TRANSFER',
      notes: notes
    };
    const urlWithParams = `${this.urlApiTransaction}/transaction${this.jwt}`;
    return this._http.post(urlWithParams, transactionData).pipe(
      map(response => {
        //this.getUserAccounts(customerId).subscribe();
        //console.log(ammount);
      })
    );
  }

  
}

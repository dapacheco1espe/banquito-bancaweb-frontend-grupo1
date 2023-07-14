import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountOperationsDataShareService {
  private _account:BehaviorSubject<Account> = new BehaviorSubject<Account>({
    accountTypeId: '',
    accountType: '',
    accountBalance: 0,
    accountNumber: ''
  });
  constructor() { }

  get account$():Observable<Account>{
    return this._account.asObservable();
  }

  set account(newAccount:Account){
    this._account.next(newAccount);
  }
}

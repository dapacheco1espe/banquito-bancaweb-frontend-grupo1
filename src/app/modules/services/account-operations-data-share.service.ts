import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../Models/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountOperationsDataShareService {
  private _account:BehaviorSubject<Account> = new BehaviorSubject<Account>({
    id: 0,
    uniqueKey: '',
    name:'',
    clientUk:'',
    maxOverdraft: 0,
    codeInternalAccount: '',
    availableBalance: 0,
    totalBalance: 0,
  });
  constructor() { }

  get account$():Observable<Account>{
    return this._account.asObservable();
  }

  set account(newAccount:Account){
    this._account.next(newAccount);
  }
}

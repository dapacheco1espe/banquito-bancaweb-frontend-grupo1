import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../../Models/Account';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private _accounts:BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);
  
  constructor(private _http:HttpClient) {

  }

  get accounts$():Observable<Account[]>{
    return this._accounts.asObservable();
  }
  public getUserAccounts(customerId:number):Observable<any>{
    return this._http.post('/accounts',{id:customerId}).pipe(
      tap(response=>{
        this._accounts.next(response);
      })
    );
  }
}

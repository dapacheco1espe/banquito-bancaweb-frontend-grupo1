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

  private urlApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/productAccount';
  
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


  public getProductAccount(): Observable<any>{
    return this._http.get<any>(this.urlApi);
  }
}

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

  //private urlApi='http://localhost:9003/api/v1/accounts';
  private urlApi='http://localhost:9003/api/v1/accounts/accounts-client';
  //private urlApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/account';
  
  private urlProductApi='https://64b14cc3062767bc4825fe08.mockapi.io/api/v1/productAccount';
  constructor(private _http:HttpClient) {
    
    
    
  }

  get accounts$():Observable<Account[]>{

    return this._accounts.asObservable();
  }
  
  public getUserAccounts(customerUK: String): Observable<any> {
    console.log(customerUK);
    const urlWithParams = `${this.urlApi}/${customerUK}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._accounts.next(response);
      })
    );
  }

  public getAccount(id: number): Observable<any> {
    const urlWithParams = `${this.urlApi}/${id}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._accounts.next(response);
      })
    );
  }

 
  
  public createAccount(customerId: String, accountType: string): Observable<any> {
    const accountData = {
      clientId: customerId,
      productAccount: {
        name: accountType
      },
      availableBalance: 0,
      totalBalance: 0,
      maxOverdraft: 400,
      codeInternalAccount: Math.floor(Math.random() * 9000000000) + 1000000000,
    };

    return this._http.post(this.urlApi, accountData).pipe(
      tap(response => {
        this.getUserAccounts(customerId).subscribe();
      })
    );
  }

  

  public getProductAccount(): Observable<any>{
    return this._http.get<any>(this.urlProductApi);
  }
}

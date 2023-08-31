import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../../Models/Account';
import { tap,map } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _accounts: BehaviorSubject<Account[]> = new BehaviorSubject<Account[]>([]);


  private urlApi='';

  private urlProductApi='';
  private jwt='';

  constructor(private _http: HttpClient) {

    this.urlApi=environment.urlApiAccount;
    this.urlProductApi=environment.urlApiAccountProduct;
    this.jwt=environment.apiSecurity;

  }

  get accounts$(): Observable<Account[]>{

    return this._accounts.asObservable();
  }

  public getUserAccounts(customerUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/accounts-client/${customerUK}${this.jwt}`;
    return this._http.get(urlWithParams).pipe(
      tap((response) => {
        this._accounts.next(response);
      })
    );
  }


  public getAccount(accountUK: String): Observable<any> {
    const urlWithParams = `${this.urlApi}/account/${accountUK}${this.jwt}`;
    return this._http.get(urlWithParams).pipe(
      tap((response) => {
        this._accounts.next(response);
      })
    );
  }

  public createAccount(clientUk: String, productUk: string): Observable<any> {
    const accountData = {
      clientUk: clientUk,
      uniqueKey: '',
      codeInternalAccount: '',
      name: '',
      totalBalance: 0,
      availableBalance: 0,
      blockedBalance: 0,
      allowOverdraft: true,
      productUk: productUk,
      maxOverdraft: 400,
      accountHolderCode:'',
      accountHolderType: 'CUS',
      codeInternationalAccount: '',
      state: 'ACT',
      interestRate: 0,
    };
    const url=this.urlApi+this.jwt;
    return this._http.post(this.urlApi, accountData).pipe(
      tap((response) => {
        this.getUserAccounts(clientUk).subscribe();
      })
    );
  }



  public getProductAccount(): Observable<any>{
    const urlApiProduct = `${this.urlProductApi}/productos${this.jwt}`;
    return this._http.get<any>(urlApiProduct);
  }

  getTypeOfAccount(productId: string): Promise<string> {
    const urlMongo = `${this.urlProductApi}/productos/${productId}${this.jwt}`;
    return this._http.get<any>(urlMongo).toPromise()
        .then(response => response.name);
}

}

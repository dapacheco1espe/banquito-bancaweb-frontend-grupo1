import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoanProduct } from '../../Models/LoanProduct';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {

  private urlApi='';
  private jwt='';
  private _productsLoan:BehaviorSubject<LoanProduct[]> = new BehaviorSubject<LoanProduct[]>([]);

  constructor(private _http:HttpClient) { 
    this.urlApi=environment.urlApiLoanProduct;
    this.jwt=environment.apiSecurity;
  }

  get productLoans$():Observable<LoanProduct[]>{

    return this._productsLoan.asObservable();
  }

  public getLoanProducts(): Observable<any> {
    const urlWithParams = `${this.urlApi}/productos${this.jwt}`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._productsLoan.next(response);
      })
    );
  }
}

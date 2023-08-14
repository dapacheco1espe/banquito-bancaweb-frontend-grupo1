import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoanProduct } from '../../Models/LoanProduct';

@Injectable({
  providedIn: 'root'
})
export class LoanProductService {

  private urlApi='http://localhost:9003/api/v2/loans';
  private _productsLoan:BehaviorSubject<LoanProduct[]> = new BehaviorSubject<LoanProduct[]>([]);

  constructor(private _http:HttpClient) { }

  get productLoans$():Observable<LoanProduct[]>{

    return this._productsLoan.asObservable();
  }

  public getLoanProducts(): Observable<any> {
    const urlWithParams = `${this.urlApi}/products`; 
    return this._http.get(urlWithParams).pipe(
      tap(response => {
        this._productsLoan.next(response);
      })
    );
  }
}

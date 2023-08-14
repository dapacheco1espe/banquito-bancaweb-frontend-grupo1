import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanAmortizationService {

  private urlApi='http://localhost:9003/api/v1/amortization';

  constructor(private _http:HttpClient) { }

  public getAmortization(loanId: number, type: string): Observable<any> {
    const urlWithParams = `${this.urlApi}/account`; 
    const amortizationData = {
      loanId: loanId,
      type: type,
    };

    return this._http.post(urlWithParams, amortizationData).pipe(
      tap(response => {
        
      })
    );
  }
}

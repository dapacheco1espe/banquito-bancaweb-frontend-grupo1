import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoanTransaction } from '../../Models/LoanTransaction';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanHistoryService {
  
  private urlApiAmortization='';
  private jwt='';

  private _loanTransaction:BehaviorSubject<LoanTransaction[]> = new BehaviorSubject<LoanTransaction[]>([]);


  constructor(
    private _http:HttpClient
  ) {
    this.urlApiAmortization=environment.urlApiLoanAmortization;
    this.jwt=environment.apiSecurity;
   }
  

  
  findByLoan(uuid: String): Observable<any> {
    const urlWithParams = `${this.urlApiAmortization}/findByLoan/${uuid}${this.jwt}`;
    return this._http.get(urlWithParams);
  }

}

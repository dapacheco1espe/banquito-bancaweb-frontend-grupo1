import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loan } from '../Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanOperationsDataShareService {
  private _loan:BehaviorSubject<Loan> = new BehaviorSubject<Loan>({
    id: 0,
    uuid: '',
    name: '',
    code: '',
    nextPayment: 0,
    nextPaymentDate:new Date(''),
  });
  constructor() { }

  get loan$():Observable<Loan>{
    return this._loan.asObservable();
  }

  set loan(newLoan:Loan){
    this._loan.next(newLoan);
  }
}

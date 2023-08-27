import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoanProduct } from '../Models/LoanProduct';


@Injectable({
  providedIn: 'root'
})
export class LoanProductDataShareService {
  private _loanProduct:BehaviorSubject<LoanProduct> = new BehaviorSubject<LoanProduct>({
    uniqueId: '',
    cappingPercentage: 0,
    cappingMethod: '',
    interestType: '',
    name: '',
    description: '',
    defaultLoanAmount: 0,
    minLoanAmount: 0,
    maxLoanAmount: 0,
    defaultNumInstallments: 0,
    minNumInstallments: 0,
    maxNumInstallments: 0,
    defaultGracePeriod: 0,
    minGracePeriod: 0,
    maxGracePeriod: 0,
    gracePeriodType: '',
    defaultRepaymentPeriodCount: 0,
    repaymentPeriodUnit: '',
    defaultPenaltyRate: 0,
    minPenaltyRate: 0,
    maxPenaltyRate: 0,
    interestCalculationMethod: '',
    loanPenaltyCalculationMethod: '',
    valid: true
  });
  constructor() { }

  get loanProduct$():Observable<LoanProduct>{
    return this._loanProduct.asObservable();
  }

  set loanProduct(newLoanProduct:LoanProduct){
    this._loanProduct.next(newLoanProduct);
  }
}

import { Component, OnInit } from '@angular/core';
import { LoanOperationsDataShareService } from '../services/loan-operations-data-share.service';
import { Loan } from '../Models/Loan';
import { LoanHistoryService } from './services/loan-history.service';
import { LoanTransaction } from '../Models/LoanTransaction';

@Component({
  selector: 'app-loan-history',
  templateUrl: './loan-history.component.html',
  styleUrls: ['./loan-history.component.scss']
})
export class LoanHistoryComponent implements OnInit {

  public transaction!: LoanTransaction[];

  constructor(private _loanOperationDataShareService: LoanOperationsDataShareService,
    private loanTransaction: LoanHistoryService) { }
  public loan: Loan;

  ngOnInit(): void {
    this._loanOperationDataShareService.loan$.subscribe({
      next: (loan: Loan) => {
        this.loan = loan;
      }
    });
  }
  public getLoanHistory() {
    this.loanTransaction.getHistoryLoan(this.loan.code).subscribe({
        next: (response) => {
            this.transaction = response;
        },
    });
}

}

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
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private _loanOperationDataShareService: LoanOperationsDataShareService,
    private loanTransaction: LoanHistoryService) { }
  public loan: Loan;

  ngOnInit(): void {
    this._loanOperationDataShareService.loan$.subscribe({
      next: (loan: Loan) => {
        this.loan = loan;
      }
    });
    this.getLoanHistory();
  }
  public getLoanHistory() {
    this.loanTransaction.findByLoan(this.loan.uuid).subscribe({
        next: (response) => {
            this.transaction = response;
            this.transaction.sort((a, b) => a.quotaNum - b.quotaNum);
        },
    });
}


changePage(newPage: number) {
  if (newPage >= 1 && newPage <= Math.ceil(this.transaction.length / this.itemsPerPage)) {
    this.currentPage = newPage;
  }
}
getFormattedQuotaStatus(status: string): string {
  if (status === 'CUR') {
    return 'Por Pagar';
  } else if (status === 'PEN') {
    return 'Pendiente';
  } else if (status === 'PAI') {
    return 'Pagada';
  } else {
    return ''; 
  }
}

calculateTotalPenAmount(): number {
  return this.transaction
    .filter(trans => trans.quotaStatus === 'PEN')
    .reduce((total, trans) => total + trans.quotaAmount, 0);
}

}

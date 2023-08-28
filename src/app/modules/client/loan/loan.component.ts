import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from '../Models/Loan';
import { LoanService } from '../loan/services/loan.service';
import { LoanOperationsDataShareService } from '../services/loan-operations-data-share.service';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  public loa!: Loan[];
  constructor(
    private _router: Router,
    private loan: LoanService,
    private _loanOperationsDataShareService: LoanOperationsDataShareService
  ) { }

  ngOnInit(): void {
    this.getLoan();
  }
  public navigateToPages(page: 'loan-product') {
    this._router.navigateByUrl(`/client/${page}`);
  }

  public goToOperationsBoard(loan: Loan) {
    this._loanOperationsDataShareService.loan = loan;
    this._router.navigateByUrl('/client/loan-operations');
  }
  public getLoan() {
    this.loan.loans$.subscribe({
      next: (response) => {
        this.loa = response;

      },
    });
  }

  public saveLoanOnServiceForDataShare(loan:Loan){
    this._loanOperationsDataShareService.loan = loan;
    this._router.navigateByUrl('/client/loan-operations');
}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'app/mock-api/http/loans.services';
import { Loan } from '../Models/Loan';
import { Account } from '../Models/Account';
import { AccountService } from '../account/services/account.service';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { LoanOperationsDataShareService } from '../services/loan-operations-data-share.service';
import { ClientDataShareService } from '../services/client-data-share.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public acc!: Account[];
    public loa!: Loan[];
    constructor(
        private router: Router,
        private account: AccountService,
        private loan: LoanService,
        private _accountOperationsDataShareService:AccountOperationsDataShareService,
        private _loanOperationsDataShareService:LoanOperationsDataShareService,
        private clientService: ClientDataShareService
    ) {}

    ngOnInit(): void {
        this.getAccount();
        this.getLoan();

        const clientUk = '46c36f57-5370-4f88-9232-42616a2a348d';
        this.clientService.setClientUk(clientUk);
    }

    public navigateToPages(page: 'account' | 'account-transactions' | 'loan' | 'loan-operations' ) {
        this.router.navigateByUrl(`/client/${page}`);
    }

    public getAccount() {
        const clientUk = '46c36f57-5370-4f88-9232-42616a2a348d';
        this.clientService.setClientUk(clientUk);
        this.account.getUserAccounts(clientUk).subscribe({
            next: (response) => {
                this.acc = response;
            },
        });
    }

    public getLoan() {
        this.loan.getLoan().subscribe({
            next: (response) => {
                this.loa = response;
                
            },
        });
    }

    public saveAccountOnServiceForDataShare(account:Account){
        this._accountOperationsDataShareService.account = account;
        this.router.navigateByUrl('/client/account-operations');
    }

    public saveLoanOnServiceForDataShare(loan:Loan){
        this._loanOperationsDataShareService.loan = loan;
        this.router.navigateByUrl('/client/loan-operations');
    }
}

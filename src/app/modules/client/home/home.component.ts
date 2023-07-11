import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'app/mock-api/http/loans.services';
import { Loan } from 'app/mock-api/types/loan.types';
import { Account } from '../Models/Account';
import { AccountService } from '../account/services/account.service';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';

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
    ) {}

    ngOnInit(): void {
        this.getAccount();
        this.getLoan();
    }

    public navigateToPages(page: 'account' | 'account-transactions' | 'loans') {
        this.router.navigateByUrl(`/client/${page}`);
    }

    public getAccount() {
        this.account.getUserAccounts(1).subscribe({
            next: (response) => {
                this.acc = response;
            },
        });
    }

    public getLoan() {
        this.loan.getLoan().subscribe({
            next: (response) => {
                this.loa = response;
                console.log(this.acc);
            },
        });
    }

    public saveAccountOnServiceForDataShare(account:Account){
        this._accountOperationsDataShareService.account = account;
        this.router.navigateByUrl('/client/account-operations');
    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'app/mock-api/http/accounts.services';
import { LoanService } from 'app/mock-api/http/loans.services';
import { Account } from 'app/mock-api/types/account.types';
import { Loan } from 'app/mock-api/types/loan.types';

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
        private loan: LoanService
    ) {}

    ngOnInit(): void {
        this.getAccount();
        this.getLoan();
    }

    public navigateToPages(page: 'account' | 'payments' | 'loans') {
        this.router.navigateByUrl(`/client/${page}`);
    }

    public getAccount() {
        this.account.getAccount().subscribe({
            next: (response) => {
                this.acc = response;
                console.log(this.acc);
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
}

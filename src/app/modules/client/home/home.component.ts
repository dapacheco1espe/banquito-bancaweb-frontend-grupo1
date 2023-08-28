import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan/services/loan.service';
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
    accounts: any[] = []; 
    loans: any[] = []; 
    clientUk = '46c36f57-5370-4f88-9232-42616a2a348d';
    constructor(
        private router: Router,
        private account: AccountService,
        private loan: LoanService,
        private _accountOperationsDataShareService:AccountOperationsDataShareService,
        private _loanOperationsDataShareService:LoanOperationsDataShareService,
        private clientService: ClientDataShareService
    ) {}

    async ngOnInit(): Promise<void> {
        this.getAccount();
        await this.getLoanData();
        
    }

    public navigateToPages(page: 'account' | 'account-transactions' | 'loan' | 'loan-operations' ) {
        this.router.navigateByUrl(`/client/${page}`);
    }

     
    public getAccount() {
    
    this.clientService.setClientUk(this.clientUk);
    
    this.account.getUserAccounts(this.clientUk).subscribe({
        next: async (response) => {
            for (const acc of response) {
                acc.tipoCuenta = await this.account.getTypeOfAccount(acc.productUk);
            }
            this.acc = response;
        },
    });
}

async getLoanData(): Promise<void> {
    this.accounts = await this.account.getUserAccounts(this.clientUk).toPromise();

    for (const account of this.accounts) {
        try {
            const loansForAccount = await this.loan.getUserLoans(account.id).toPromise();
            if (loansForAccount.length > 0) {
                this.loans.push(...loansForAccount);
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
            
        }
    }
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

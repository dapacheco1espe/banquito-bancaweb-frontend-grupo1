import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';
import { AccountHistoryService } from './services/account-history.service';
import { AccountTransaction } from '../Models/AccountTransaction';

const transactionTypeTranslations = {
  ADJUSTMENT: 'Ajuste',
  WITHDRAWAL: 'Retiro',
  TRANSFER: 'Transferencia',
  PAYMENT: 'Pago',
  FEE_APPLIED: 'Comisión aplicada',
  INTEREST_AP: 'Interés aplicado',
  WITHHOLD_TA: 'Retención TA',
  LOAN_FUNDED: 'Préstamo financiado',
  LOAN_REPAID: 'Préstamo pagado',
};

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  accountId: string = '0';
  accountData: any;

  public transaction!: AccountTransaction[];

  

  constructor(private _accountOperationDataShareService: AccountOperationsDataShareService,
    private accountTransaction: AccountHistoryService
    ) { }

  public account: Account;
  ngOnInit(): void {

    this._accountOperationDataShareService.account$.subscribe({
      next: (account: Account) => {
        this.account = account;
      }
    });
    this.getAccountTransaction();

    
  }

  public getAccountTransaction() {
    this.accountTransaction.getHistoryAccount(this.account.uniqueKey).subscribe({
        next: (response) => {
            this.transaction = response;
        },
    });
}

public transactions: any[]; 
  getTransactionTypeTranslation(type: string): string {
    return transactionTypeTranslations[type] || type;
  }


}

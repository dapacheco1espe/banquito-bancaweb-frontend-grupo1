import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';
@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  accountId: string = '0';
  accountData: any;

  constructor(private _accountOperationDataShareService: AccountOperationsDataShareService) { }

  public account: Account;
  ngOnInit(): void {

    this._accountOperationDataShareService.account$.subscribe({
      next: (account: Account) => {
        this.account = account;
      }
    });
  }




}

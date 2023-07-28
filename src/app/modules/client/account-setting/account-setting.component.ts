import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';
import { AccountSettingService } from './services/account-setting.service';
@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss']
})
export class AccountSettingComponent implements OnInit {
  public maxOverdraft: number;
  constructor(private _accountOperationDataShareService: AccountOperationsDataShareService,
    private _accountSettingService:AccountSettingService
    ) { }
  public account: Account;
  ngOnInit(): void {
    this._accountOperationDataShareService.account$.subscribe({
      next: (account: Account) => {
        this.account = account;
        this.maxOverdraft= account.maxOverdraft;
      }
    });
  }

  showSuccess = false;
  showFailed = false;
  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.closePopupAndReset();
    }, 3000);
  }

  showErrorMessage() {
    this.showFailed = true;
    setTimeout(() => {
      this.closePopupAndReset();
    }, 3000);
  }

  closePopupAndReset() {
    this.showSuccess = false;
    this.showFailed = false;
  }

  public updateMaxOverdraft(accountId: number, maxOverdraft: number): void {
    this._accountSettingService.updateMaxOverdraft(accountId,maxOverdraft).subscribe(
      response => {
        this.showSuccessMessage();
      },
      error => {
        this.showErrorMessage();
      }
    );
  }
}

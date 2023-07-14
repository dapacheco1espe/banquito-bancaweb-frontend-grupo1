import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private _accountService:AccountService, private _changeDetector:ChangeDetectorRef,
    private _router:Router, private _accountOperationsDataShareService:AccountOperationsDataShareService) { }
  public accounts$:Observable<any>;
  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    this._changeDetector.markForCheck();
  }

    isPopupOpen = false;
    showSuccess = false;
    openPopup() {
      this.isPopupOpen = true;
    }
  
    closePopup() {
      this.isPopupOpen = false;
    }

    showSuccessMessage(cuenta: string) {
      this.showSuccess = true;
      setTimeout(() => {
        this.closePopupAndReset();
      }, 3000);
    }
  
    closeSuccessMessage() {
      this.showSuccess = false;
    }

    closePopupAndReset() {
      this.isPopupOpen = false;
      this.showSuccess = false;
    }

    stopPropagation(event: Event) {
      event.stopPropagation();
    }

  public goToOperationsBoard(account:Account){
    this._accountOperationsDataShareService.account = account;
    this._router.navigateByUrl('/client/account-operations');
  }
}

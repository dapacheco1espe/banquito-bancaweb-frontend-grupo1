import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';
import { ClientDataShareService } from '../services/client-data-share.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  dataProductAccount: any[] = [];


  constructor(private _accountService:AccountService, private _changeDetector:ChangeDetectorRef,
    private _router:Router, private _accountOperationsDataShareService:AccountOperationsDataShareService,
    private clientService: ClientDataShareService) { }
  public accounts$:Observable<any>;

  

  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    this._changeDetector.markForCheck();
    this.obtainProductAccount();

    
  }

    isPopupOpen = false;
    showSuccess = false;
    showFailed = false;
    openPopup() {
      this.isPopupOpen = true;
    }
  
    closePopup() {
      this.isPopupOpen = false;
    }

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
      this.isPopupOpen = false;
      this.showSuccess = false;
      this.showFailed = false;
    }

    stopPropagation(event: Event) {
      event.stopPropagation();
    }
    

    obtainProductAccount() {
      this._accountService.getProductAccount().subscribe(data => {
        const filteredData = data.filter(account => account.clientType === "NATURAL" && account.state === "Active");
        
        this.dataProductAccount = filteredData;
      });
    }
    

    public createAccount(accountType: string): void {
      this._accountService.createAccount(this.clientService.getClientUk(),accountType).subscribe(
        response => {
          this.showSuccessMessage();
        },
        error => {
          this.showErrorMessage();
        }
      );
    }
    

  public goToOperationsBoard(account:Account){
    this._accountOperationsDataShareService.account = account;
    this._router.navigateByUrl('/client/account-operations');
  }

  
}

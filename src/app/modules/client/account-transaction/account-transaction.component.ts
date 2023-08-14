import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Observable } from 'rxjs';
import { Account } from '../Models/Account';
import { AccountDestination } from '../Models/AccountDestination';
import { AccountTransactionService } from './services/account-transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

  public account:Account;
  public accountBalanceAfterTransaction:number = 0;
  public accountNumber: string = '';
  public ammount: number = 0;
  public notes: string = '';
  public accountDestination :AccountDestination;
  public isInputEmpty: boolean = true;
  public errorMessage: string = '';
  public isAccountNumberValid: boolean = true;
  public isAccountInfoAvailable: boolean = false;
  public showErrorPopup: boolean = false;
  
  constructor(private _accountOperationDataShareService:AccountOperationsDataShareService,
    private accountTransactionService: AccountTransactionService,
    private router: Router) { }

  ngOnInit(): void {
    
    this._accountOperationDataShareService.account$.subscribe({
      next:(account:Account)=>{
        this.account = account;
        this.accountBalanceAfterTransaction = this.account.availableBalance;
      }
    });
  }
  showSuccess = false;
  showFailed = false;
  isPopupOpen = false;

  onInputChange() {
    this.isInputEmpty = this.accountNumber.trim().length === 0;
    this.isAccountNumberValid = this.accountNumber.length === 8;
    this.errorMessage = '';
  }

  private openErrorPopup() {
    this.showErrorPopup = true;
  }

  public closeErrorPopup() {
    this.showErrorPopup = false;
  }

  public validateAccount(){
    if (this.isInputEmpty) {
      this.errorMessage = 'Escriba el número de cuenta';
    } 
    else if (this.accountNumber.length !== 8) {
      this.errorMessage = 'Número inválido. Debe tener 8 dígitos';
    }
    else if (this.accountNumber === this.account.codeInternalAccount) {
      this.errorMessage = 'No se puede transferir a la cuenta de origen';
    }
    else {
    this.accountTransactionService.getAccountByCodeInternal(this.accountNumber).subscribe(
      
        (accountD: AccountDestination | undefined) => {
          this.accountDestination = accountD;
          if (accountD === undefined) {
            this.errorMessage = 'Cuenta no encontrada';
          }
          else{
            this.isAccountInfoAvailable = true;
          }
        },
      (error) => {
        this.errorMessage = 'Error al obtener la cuenta';
      }
    );
  }
  }
  
  public calculateBalance(event:Event){
    const input = event.target as HTMLInputElement;
    input.value = input.value == '' || parseFloat(input.value)<0 ? '0' :input.value;
    const total = this.account.availableBalance - parseFloat(input.value);
    this.accountBalanceAfterTransaction = total < 0 ? 0 :total ;
    this.isAccountInfoAvailable = this.accountBalanceAfterTransaction > 0;
    if (this.accountBalanceAfterTransaction <= 0) {
      this.openErrorPopup();
      return;
    }
  }

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.closePopupAndReset();
      this.router.navigate(['/']);
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

  public createTransfer( creditorAccount: string,debtorAccount: string): void {
    this.accountTransactionService.createTransacctionAccount(this.ammount,creditorAccount,debtorAccount,this.notes).subscribe(
      response => {
        this.showSuccessMessage();
      },
      error => {
        this.showErrorMessage();
      }
    );
  }


}

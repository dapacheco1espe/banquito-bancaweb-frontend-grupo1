import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Observable } from 'rxjs';
import { Account } from '../Models/Account';
import { AccountDestination } from '../Models/AccountDestination';
import { AccountTransactionService } from './services/account-transaction.service';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

  public account:Account;
  public accountBalanceAfterTransaction:Number = 0;
  public accountNumber: string = '';
  public accountDestination :Account;

  
  constructor(private _accountOperationDataShareService:AccountOperationsDataShareService,
    private accountTransactionService: AccountTransactionService) { }

  ngOnInit(): void {
    
    this._accountOperationDataShareService.account$.subscribe({
      next:(account:Account)=>{
        this.account = account;
        this.accountBalanceAfterTransaction = this.account.availableBalance;
      }
    });
  }

  public validateAccount(){
    console.log(this.accountNumber);

    this.accountTransactionService.getAccountByCodeInternal(this.accountNumber).subscribe(
      (response) => {
        this.accountDestination = response;
        console.log(this.accountDestination)
      },
      (error) => {
        console.error('Error al obtener la cuenta:', error);
      }
    );

  }
  
  public calculateBalance(event:Event){
    const input = event.target as HTMLInputElement;
    input.value = input.value == '' || parseFloat(input.value)<0 ? '0' :input.value;
    const total = this.account.availableBalance - parseFloat(input.value);
    this.accountBalanceAfterTransaction = total < 0 ? 0 :total ;
  }

  


}

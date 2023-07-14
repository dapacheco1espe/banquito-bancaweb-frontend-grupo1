import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Observable } from 'rxjs';
import { Account } from '../Models/Account';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

  constructor(private _accountOperationDataShareService:AccountOperationsDataShareService) { }
  public account:Account;
  public accountBalanceAfterTransaction:Number = 0;
  ngOnInit(): void {
    this._accountOperationDataShareService.account$.subscribe({
      next:(account:Account)=>{
        this.account = account;
        this.accountBalanceAfterTransaction = this.account.accountBalance;
      }
    });
  }

  public validateAccount(){
    const accountNumber = document.getElementById('accountNumber') as HTMLInputElement;
    
  }
  
  public calculateBalance(event:Event){
    const input = event.target as HTMLInputElement;
    input.value = input.value == '' || parseFloat(input.value)<0 ? '0' :input.value;
    const total = this.account.accountBalance - parseFloat(input.value);
    this.accountBalanceAfterTransaction = total < 0 ? 0 :total ;
  }

}

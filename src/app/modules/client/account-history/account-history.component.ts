import { Component, OnInit } from '@angular/core';
import { AccountHistoryService } from './services/account-history.service';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  accountId: string = '0'; 
  accountData: any;

  constructor(private accountService: AccountHistoryService) { }

  ngOnInit(): void {
    this.obtainAccountById();
  }
  obtainAccountById(): void {
    this.accountService.getAccountById(this.accountId)
      .subscribe(data => {
        this.accountData = data;
        console.log(this.accountData);
      });
  }

  

}

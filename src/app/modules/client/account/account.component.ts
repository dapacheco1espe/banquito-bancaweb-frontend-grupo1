import { Component, OnInit } from '@angular/core';
import { Account } from 'app/mock-api/types/account.types';
import {AccountService} from "../../../mock-api/http/accounts.services";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    public acc!: Account[];

  constructor(
      private accountService:AccountService
  ) { }

  ngOnInit(): void {
      this.getAccount();
  }

  public getAccount(){
      this.accountService.getAccount().subscribe({
          next:
              (response:Account[])=>
              {
                    this.acc=response;
      }});
  }

}

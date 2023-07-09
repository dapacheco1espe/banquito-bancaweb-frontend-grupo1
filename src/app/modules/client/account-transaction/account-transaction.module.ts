import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTransactionRoutingModule } from './account-transaction-routing.module';
import { AccountTransactionComponent } from './account-transaction.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AccountTransactionComponent
  ],
  imports: [
    SharedModule,
    AccountTransactionRoutingModule
  ]
})
export class AccountTransactionModule { }

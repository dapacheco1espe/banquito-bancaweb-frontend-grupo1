import { NgModule } from '@angular/core';
import { AccountTransactionRoutingModule } from './account-transaction-routing.module';
import { AccountTransactionComponent } from './account-transaction.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AccountTransactionComponent
  ],
  imports: [
    SharedModule,
    AccountTransactionRoutingModule,
    MatButtonModule
  ]
})
export class AccountTransactionModule { }

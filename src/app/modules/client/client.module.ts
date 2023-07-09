import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

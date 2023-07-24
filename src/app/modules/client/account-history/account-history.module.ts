import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHistoryRoutingModule } from './account-history-routing.module';
import { AccountHistoryComponent } from './account-history.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AccountHistoryComponent
  ],
  imports: [
    SharedModule,
    AccountHistoryRoutingModule
  ]
})
export class AccountHistoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountHistoryRoutingModule } from './account-history-routing.module';
import { AccountHistoryComponent } from './account-history.component';
import { SharedModule } from 'app/shared/shared.module';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AccountHistoryComponent
  ],
  imports: [
    SharedModule,
    AccountHistoryRoutingModule,
  ]
})
export class AccountHistoryModule { }

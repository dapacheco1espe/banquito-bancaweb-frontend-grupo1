import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanHistoryRoutingModule } from './loan-history-routing.module';
import { LoanHistoryComponent } from './loan-history.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanHistoryComponent
  ],
  imports: [
    SharedModule,
    LoanHistoryRoutingModule,
    MatIconModule,
  ]
})
export class LoanHistoryModule { }

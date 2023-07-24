import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanPaymentRoutingModule } from './loan-payment-routing.module';
import { LoanPaymentComponent } from './loan-payment.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanPaymentComponent
  ],
  imports: [
    SharedModule,
    LoanPaymentRoutingModule,
    MatIconModule,
  ]
})
export class LoanPaymentModule { }

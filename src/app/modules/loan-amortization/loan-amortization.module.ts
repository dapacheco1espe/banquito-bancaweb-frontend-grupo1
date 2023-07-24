import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanAmortizationRoutingModule } from './loan-amortization-routing.module';
import { LoanAmortizationComponent } from './loan-amortization.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanAmortizationComponent
  ],
  imports: [
    SharedModule,
    LoanAmortizationRoutingModule,
    MatIconModule,
  ]
})
export class LoanAmortizationModule { }

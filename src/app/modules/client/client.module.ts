import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { AccountHistoryComponent } from './account-history/account-history.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { LoanComponent } from './loan/loan.component';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { LoanProductComponent } from './loan-product/loan-product.component';
import { LoanAmortizationComponent } from './loan-amortization/loan-amortization.component';
import { LoanOperationsComponent } from './loan-operations/loan-operations.component';
import { LoanPaymentComponent } from './loan-payment/loan-payment.component';
import { LoanHistoryComponent } from './loan-history/loan-history.component';


@NgModule({
  declarations: [
  
  
  ],
  imports: [
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanApplyRoutingModule } from './loan-apply-routing.module';
import { LoanApplyComponent } from './loan-apply.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanApplyComponent
  ],
  imports: [
    SharedModule,
    LoanApplyRoutingModule,
    MatIconModule,
  ]
})
export class LoanApplyModule { }

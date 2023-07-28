import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanOperationsRoutingModule } from './loan-operations-routing.module';
import { LoanOperationsComponent } from './loan-operations.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    LoanOperationsComponent
  ],
  imports: [
    SharedModule,
    LoanOperationsRoutingModule,
    MatIconModule,
  ]
})
export class LoanOperationsModule { }

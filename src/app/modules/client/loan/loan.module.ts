import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './loan.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanComponent
  ],
  imports: [
    SharedModule,
    LoanRoutingModule,
    MatIconModule,
  ]
})
export class LoanModule { }

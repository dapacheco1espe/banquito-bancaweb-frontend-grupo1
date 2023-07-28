import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanProductRoutingModule } from './loan-product-routing.module';
import { LoanProductComponent } from './loan-product.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    LoanProductComponent
  ],
  imports: [
    SharedModule,
    LoanProductRoutingModule,
    MatIconModule,
  ]
})
export class LoanProductModule { }

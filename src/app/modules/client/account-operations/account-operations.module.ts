import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountOperationsRoutingModule } from './account-operations-routing.module';
import { AccountOperationsComponent } from './account-operations.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AccountOperationsComponent
  ],
  imports: [
    SharedModule,
    AccountOperationsRoutingModule
  ]
})
export class AccountOperationsModule { }

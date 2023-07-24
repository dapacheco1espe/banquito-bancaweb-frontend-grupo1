import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    MatTabsModule
  ]
})
export class AccountModule { }

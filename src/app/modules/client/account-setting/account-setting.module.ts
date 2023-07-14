import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountSettingRoutingModule } from './account-setting-routing.module';
import { AccountSettingComponent } from './account-setting.component';
import { SharedModule } from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AccountSettingComponent
  ],
  imports: [
    SharedModule,
    AccountSettingRoutingModule,
    MatIconModule,
  ]
})
export class AccountSettingModule { }

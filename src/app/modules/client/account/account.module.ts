import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
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
   

  ]
})
export class AccountModule { }

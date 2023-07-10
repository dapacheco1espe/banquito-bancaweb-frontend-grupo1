import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {MatCardModule,} from '@angular/material/card';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    SharedModule,
    AccountRoutingModule,
    MatCardModule,
    MatIconModule

  ]
})
export class AccountModule { }

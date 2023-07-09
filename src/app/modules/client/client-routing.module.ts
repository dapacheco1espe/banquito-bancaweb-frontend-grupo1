import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AccountOperationsComponent } from './account-operations/account-operations.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { AccountHistoryComponent } from './account-history/account-history.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('app/modules/client/home/home.module') .then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('app/modules/client/account/account.module') .then(m => m.AccountModule),
  },
  {
    path: 'account-operations',
    loadChildren: () => import('app/modules/client/account-operations/account-operations.module') .then(m => m.AccountOperationsModule),
  },
  {
    path: 'account-transactions',
    loadChildren: () => import('app/modules/client/account-transaction/account-transaction.module') .then(m => m.AccountTransactionModule),
  },
  {
    path: 'account-history',
    loadChildren: () => import('app/modules/client/account-history/account-history.module') .then(m => m.AccountHistoryModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

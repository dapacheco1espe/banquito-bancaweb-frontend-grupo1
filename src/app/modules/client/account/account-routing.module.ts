import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountsResolver } from './account.resolvers';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    resolve:{
      accounts:AccountsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

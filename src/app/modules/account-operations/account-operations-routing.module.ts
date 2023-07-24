import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountOperationsComponent } from './account-operations.component';

const routes: Routes = [
  {
    path:'',
    component:AccountOperationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountOperationsRoutingModule { }

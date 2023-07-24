import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanApplyComponent } from './loan-apply.component';

const routes: Routes = [
  {
    path:'',
    component:LoanApplyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanApplyRoutingModule { }

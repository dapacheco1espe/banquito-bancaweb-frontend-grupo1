import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanOperationsComponent } from './loan-operations.component';

const routes: Routes = [
  {
    path:'',
    component:LoanOperationsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanOperationsRoutingModule { }

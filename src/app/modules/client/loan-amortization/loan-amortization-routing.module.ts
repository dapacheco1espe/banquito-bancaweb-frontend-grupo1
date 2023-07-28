import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAmortizationComponent } from './loan-amortization.component';

const routes: Routes = [
  {
    path:'',
    component:LoanAmortizationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanAmortizationRoutingModule { }

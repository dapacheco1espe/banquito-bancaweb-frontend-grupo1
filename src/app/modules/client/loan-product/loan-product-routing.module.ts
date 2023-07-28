import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanProductComponent } from './loan-product.component';

const routes: Routes = [
  {
    path:'',
    component:LoanProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanProductRoutingModule { }

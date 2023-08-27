import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanProductService } from './services/loan-product.service';
import { LoanProduct } from '../Models/LoanProduct';
import { Observable } from 'rxjs';
import { LoanProductDataShareService } from '../services/loan-product-data-share.service';
@Component({
  selector: 'app-loan-product',
  templateUrl: './loan-product.component.html',
  styleUrls: ['./loan-product.component.scss']
})
export class LoanProductComponent implements OnInit {

  constructor(
    private router: Router,
    private _loanProductService:LoanProductService,
    private _loanProductDataShareService:LoanProductDataShareService,
  ) { }
  products$: Observable<LoanProduct>;

  iconMappings: { [key: string]: string } = {
    'Préstamo Consumo': 'shopping_bag',
    'Préstamo Hipotecario': 'home',
    'Préstamo Personal': 'person'
  };
  

  ngOnInit(): void {
    this.obtainProductAccount();
  }


  public navigateToPages(page: 'loan-apply' | 'loan-simulate',productLoan: LoanProduct) {
    this._loanProductDataShareService.loanProduct = productLoan;
    this.router.navigateByUrl(`/client/${page}`);
}


obtainProductAccount() {
  this.products$ = this._loanProductService.getLoanProducts();
  
  this.products$.subscribe(response => {
    //console.log(response);
  });
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanProductDataShareService } from '../services/loan-product-data-share.service';
import { LoanProduct } from '../Models/LoanProduct';
import { LoanFormDataShareService } from '../services/loan-form-data-share.service';
import { LoanForm } from '../Models/LoanForm';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.scss']
})
export class LoanApplyComponent implements OnInit {
  allowedCuotas: number[];
  cuotas: string = '';
  mostrarOtroCuotas: boolean = false;
  loanProduct: LoanProduct;
  otroCuotasValue: number;
  isAmountInRange: boolean = false;
  isInstallmentsInRange: boolean = true;
  valorSolicitado: number | null = null;
  repaymentPeriodCount: number;
  randomNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');
  selectedAmortizationOption: string = 'alemana'; 


  constructor(private router: Router,
    private _loanProductDataShareService:LoanProductDataShareService,
    private _loanFormDataShareService:LoanFormDataShareService,
    ) { }
  
  

  ngOnInit(): void {

    this._loanProductDataShareService.loanProduct$.subscribe({
      next: (loanProduct: LoanProduct) => {
        this.loanProduct = loanProduct;
        const allowedCuotas = Array.from(
          { length: Math.min(loanProduct.maxNumInstallments / loanProduct.minNumInstallments, 4) },
          (_, index) => (index + 1) * loanProduct.minNumInstallments
        );
        this.allowedCuotas = allowedCuotas;
      this.cuotas = allowedCuotas[0].toString();
      }
    });
    
  }
  public navigateToPages(page: 'loan-amortization') {
    if (this.cuotas !== 'otro') {
      this.repaymentPeriodCount = parseInt(this.cuotas); 
    }
    else{
      this.repaymentPeriodCount = this.otroCuotasValue;
    }
    const loanForm: LoanForm = {
      amount: this.valorSolicitado,
      repaymentPeriodCount: this.repaymentPeriodCount, 
      repaymentPeriodUnit: 'MON',
      loanProductId: parseInt(this.loanProduct.uniqueId),
      name: this.loanProduct.name + "-" + this.randomNumbers,
      nameProduct: this.loanProduct.name,
      typeAmortization: this.selectedAmortizationOption,
    };
    this._loanFormDataShareService.loanForm = loanForm;
    this.router.navigateByUrl(`/client/${page}`);
  }
  onCuotasChange() {
    if (this.cuotas !== 'otro') {
      this.mostrarOtroCuotas = false; 
    }
    else{
      this.mostrarOtroCuotas = true;
      this.isInstallmentsInRange=false;
      //this.otroCuotasValue  = Math.max(this.otroCuotasValue, this.loanProduct.minNumInstallments);
      //this.otroCuotasValue  = Math.min(this.otroCuotasValue, this.loanProduct.maxNumInstallments);
      
    }
  }
  

  onInstallmentChange(){
    const enteredAmount = this.otroCuotasValue; 
    this.isInstallmentsInRange = enteredAmount >= this.loanProduct.minNumInstallments && enteredAmount <= this.loanProduct.maxNumInstallments;
  }

  onAmountChange() {
    const enteredAmount = this.valorSolicitado; 
    this.isAmountInRange = enteredAmount >= this.loanProduct.minLoanAmount && enteredAmount <= this.loanProduct.maxLoanAmount;
  }
  

  

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

}

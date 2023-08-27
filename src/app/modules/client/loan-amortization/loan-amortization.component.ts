import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/services/account.service';
import { Observable } from 'rxjs';
import { LoanFormDataShareService } from '../services/loan-form-data-share.service';
import { LoanForm } from '../Models/LoanForm';
import { LoanAmortizationService } from './services/loan-amortization.service';
import { LoanAmortization } from '../Models/LoanAmortization';
@Component({
  selector: 'app-loan-amortization',
  templateUrl: './loan-amortization.component.html',
  styleUrls: ['./loan-amortization.component.scss']
})
export class LoanAmortizationComponent implements OnInit {

  public accounts$:Observable<any>;
  selectedAccountKey: string | null = null;
  loanForm: LoanForm;
  loanAmortization: LoanAmortization;

  constructor(private router: Router,
    private _accountService:AccountService,
    private _loanFormDataShareService: LoanFormDataShareService,
    private _loanAmortizationService: LoanAmortizationService,
    ) { }

  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    
    this._loanFormDataShareService.loanForm$.subscribe({
      next: (loanForm: LoanForm) => {
        this.loanForm = loanForm;
      }
    });
    const typeAmortizationPrefix = this.loanForm.typeAmortization.slice(0, 3).toUpperCase();

    this._loanAmortizationService.getAmortization(typeAmortizationPrefix, this.loanForm.amount, this.loanForm.repaymentPeriodCount )
        .subscribe(data => {
          this.loanAmortization = data;
        });
  }

  showPopup = false;
  showPopupS = false;

  solicitarPrestamo() {
    this.showPopup = true;
    
  }

  depositarCuenta() {
    const accountId=parseInt(this.selectedAccountKey);
    const branchId=1;
    const loanProductId=this.loanForm.loanProductId.toString();
    const accountHolderType="CLI";
    const name=this.loanForm.name;
    const ammount=this.loanForm.amount;
    const repaymentPeriodCount=this.loanForm.repaymentPeriodCount;
    const repaymentPeriodUnit=this.loanForm.repaymentPeriodUnit;
    
    this._loanAmortizationService.createLoan(accountId, branchId,loanProductId,accountHolderType,name,ammount,repaymentPeriodCount,repaymentPeriodUnit).subscribe(
      response => {
        this.showPopupS = true;

    setTimeout(() => {
      this.showPopupS = false;
      this.router.navigate(['/']);
    }, 3000);
      },
      error => {
        //this.showErrorMessage();
      }
    );
    
    
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  

}

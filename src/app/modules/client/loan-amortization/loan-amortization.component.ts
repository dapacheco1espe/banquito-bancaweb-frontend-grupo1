import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/services/account.service';
import { Observable } from 'rxjs';
import { LoanFormDataShareService } from '../services/loan-form-data-share.service';
import { LoanForm } from '../Models/LoanForm';
import { LoanAmortizationService } from './services/loan-amortization.service';
import { LoanAmortization } from '../Models/LoanAmortization';
import { AccountTransactionService } from '../account-transaction/services/account-transaction.service';
@Component({
  selector: 'app-loan-amortization',
  templateUrl: './loan-amortization.component.html',
  styleUrls: ['./loan-amortization.component.scss']
})
export class LoanAmortizationComponent implements OnInit {

  public accounts$:Observable<any>;
  selectedAccountKey: any;
  loanForm: LoanForm;
  loanAmortization: LoanAmortization[];
  typeAmortizationPrefix: string;
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private router: Router,
    private _accountService:AccountService,
    private _loanFormDataShareService: LoanFormDataShareService,
    private _loanAmortizationService: LoanAmortizationService,
    private accountTransactionService: AccountTransactionService,
    ) { }

  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    
    this._loanFormDataShareService.loanForm$.subscribe({
      next: (loanForm: LoanForm) => {
        this.loanForm = loanForm;
      }
    });
     this.typeAmortizationPrefix = this.loanForm.typeAmortization.slice(0, 3).toUpperCase();

    this._loanAmortizationService.getAmortization(this.typeAmortizationPrefix, this.loanForm.amount, this.loanForm.repaymentPeriodCount )
        .subscribe(data => {
          this.loanAmortization = data;
        });
  }

  showPopup = false;
  showPopupS = false;
  showSuccess = false;
  showFailed = false;
  isPopupOpen = false;

  solicitarPrestamo() {
    this.showPopup = true;
    
  }

  depositarCuenta() {
    console.log(this.selectedAccountKey);
    console.log(this.selectedAccountKey.id);
    const accountId=parseInt(this.selectedAccountKey.id);
    const branchId=1;
    const loanProductId=this.loanForm.loanProductId.toString();
    const accountHolderType="CLI";
    const name=this.loanForm.name;
    const amount=this.loanForm.amount;
    const repaymentPeriodCount=this.loanForm.repaymentPeriodCount;
    const repaymentPeriodUnit=this.loanForm.repaymentPeriodUnit;
    
    this._loanAmortizationService.createLoan(accountId, branchId,loanProductId,accountHolderType,name,amount,repaymentPeriodCount,repaymentPeriodUnit).subscribe(
      response => {
        
        const loanCreateId = response.id;
        this.createTransfer(amount,this.selectedAccountKey.codeInternalAccount,'20205224','DESEMBOLSO PRESTAMO');
        this.createAmortization(loanCreateId,this.typeAmortizationPrefix);
        
      },
      error => {
        this.showErrorMessage();
      }
    );
    
  }
  

  showSuccessMessage() {
    this.showSuccess = true;
    setTimeout(() => {
      this.closePopupAndReset();
      this.router.navigate(['/']);
    }, 3000);
  }

  showErrorMessage() {
    this.showFailed = true;
    setTimeout(() => {
      this.closePopupAndReset();
    }, 3000);
  }
  closePopupAndReset() {
    this.isPopupOpen = false;
    this.showSuccess = false;
    this.showFailed = false;
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  }

  public createAmortization(loanId: number,type: string): void {
    this._loanAmortizationService.generateAmortization(loanId,type).subscribe(
      response => {
        
        this.showSuccessMessage();

      },
      error => {
        this.showErrorMessage();
      }
    );
  }
  
  changePage(newPage: number) {
    if (newPage >= 1 && newPage <= Math.ceil(this.loanAmortization.length / this.itemsPerPage)) {
      this.currentPage = newPage;
    }
  }
  public createTransfer( amount: number, creditorAccount: string,debtorAccount: string,notes:string): void {
    this.accountTransactionService.createTransacctionAccount(amount,creditorAccount,debtorAccount,notes).subscribe(
      response => {
        //this.showSuccessMessage();
      },
      error => {
        this.showErrorMessage();
      }
    );
  }

  
  

}

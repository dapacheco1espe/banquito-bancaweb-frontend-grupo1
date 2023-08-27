import { Component, OnInit } from '@angular/core';
import { LoanOperationsDataShareService } from '../services/loan-operations-data-share.service';
import { Observable } from 'rxjs';
import { Loan } from '../Models/Loan';
import { AccountService } from '../account/services/account.service';
import { Account } from '../Models/Account';
import { Router } from '@angular/router';
import { LoanPaymentService } from './services/loan-payment.service';
import { AccountTransactionService } from '../account-transaction/services/account-transaction.service';
@Component({
  selector: 'app-loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrls: ['./loan-payment.component.scss']
})
export class LoanPaymentComponent implements OnInit {

  constructor(private _accountService:AccountService,private _loanOperationDataShareService: LoanOperationsDataShareService,
    private loanPaymentService: LoanPaymentService,
    private router: Router,
    private accountTransactionService: AccountTransactionService,
    ) { }

  public montoAPagar: number=0;
  public loan: Loan;
  public showSuccessPopup: boolean = false;
  public accounts$:Observable<any>;
  public selectedAccount: string | null = null;
  public errorMessage: string = '';
  
  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    this._loanOperationDataShareService.loan$.subscribe({
      next: (loan: Loan) => {
        this.loan = loan;
      }
    });
  }

 

   async payTotal() {
    if (this.selectedAccount === null ) {
      this.errorMessage = 'Selecciona una cuenta y el monto a pagar';
      this.showSuccessPopup = false;
      
      return;
    }

    //const selectedAccount: Account = await this._accountService.getAccount(this.selectedAccount).toPromise();
    //console.log(selectedAccount);
    /*
    if (!selectedAccount || selectedAccount=== undefined) {
      this.errorMessage = 'Cuenta no encontrada';
      this.showSuccessPopup = false;
      return;
    }
    console.log(selectedAccount.availableBalance);
    if (this.loan.nextPayment > selectedAccount.availableBalance) {
      this.errorMessage = 'No cuentas con fondos suficientes para realizar el pago';
      this.showSuccessPopup = false;
      return;
    }
    */

    //console.log(this.montoAPagar,'',this.selectedAccount);

    this.accountTransactionService.createTransacctionAccount(this.montoAPagar,'20205224',this.selectedAccount,'PAGO PRESTAMO').subscribe(
      response => {
        this.showSuccessMessage();
      },
      error => {
        this.showErrorMessage();
      });

    //this.createPayment(selectedAccount.id,"",1,this.montoAPagar);
    //this.showSuccessPopup = true;

    this.errorMessage = '';
  }
  

  showSuccess = false;
  showFailed = false;
  isPopupOpen = false;
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

  
  closePopup() {
    this.showSuccessPopup = false;
  }


  public createPayment(accountId: number,amortizationUuid: String,branchId: number, amountToPay: number): void {
    this.loanPaymentService.createPaymentLoan(accountId,amortizationUuid,branchId,amountToPay).subscribe(
      response => {
        this.showSuccessPopup = true;
      },
      error => {
        this.showSuccessPopup = false;
      }
    );
  }


}

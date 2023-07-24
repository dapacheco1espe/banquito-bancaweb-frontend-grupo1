import { Component, OnInit } from '@angular/core';
import { LoanOperationsDataShareService } from '../services/loan-operations-data-share.service';
import { Observable } from 'rxjs';
import { Loan } from '../Models/Loan';
import { AccountService } from '../account/services/account.service';
import { Account } from '../Models/Account';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-payment',
  templateUrl: './loan-payment.component.html',
  styleUrls: ['./loan-payment.component.scss']
})
export class LoanPaymentComponent implements OnInit {

  constructor(private _accountService:AccountService,private _loanOperationDataShareService: LoanOperationsDataShareService,
    private router: Router) { }

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

 

   payTotal() {
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

    //this.performPayment();
    this.showSuccessPopup = true;

    setTimeout(() => {
      this.showSuccessPopup = false;
      this.router.navigate(['/']);
    }, 3000);

    this.errorMessage = '';
  }

  // Método para cerrar el popup de éxito
  closePopup() {
    this.showSuccessPopup = false;
  }



}
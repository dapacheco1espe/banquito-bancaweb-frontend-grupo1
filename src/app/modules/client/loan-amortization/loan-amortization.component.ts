import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/services/account.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-loan-amortization',
  templateUrl: './loan-amortization.component.html',
  styleUrls: ['./loan-amortization.component.scss']
})
export class LoanAmortizationComponent implements OnInit {

  public accounts$:Observable<any>;
  constructor(private router: Router,
    private _accountService:AccountService
    ) { }

  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
  }

  showPopup = false;
  showPopupS = false;

  solicitarPrestamo() {
    this.showPopup = true;
    
  }

  depositarCuenta() {
    this.showPopupS = true;
    setTimeout(() => {
      this.showPopupS = false;
      this.router.navigate(['/']);
    }, 3000);
  }

}

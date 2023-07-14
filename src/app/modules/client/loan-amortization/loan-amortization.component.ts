import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-amortization',
  templateUrl: './loan-amortization.component.html',
  styleUrls: ['./loan-amortization.component.scss']
})
export class LoanAmortizationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPopup = false;

  solicitarPrestamo() {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
      this.router.navigate(['/']);
    }, 3000);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-operations',
  templateUrl: './loan-operations.component.html',
  styleUrls: ['./loan-operations.component.scss']
})
export class LoanOperationsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  public goToDefinedOperation(operation: 'pago' | 'historial' ): void {
    if (operation === 'pago') {
      this._router.navigateByUrl('/client/loan-payment');
    } else if (operation === 'historial') {
      this._router.navigateByUrl('/client/loan-history');
    } 
  }

}

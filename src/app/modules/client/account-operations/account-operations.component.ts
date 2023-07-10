import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.scss']
})
export class AccountOperationsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  public goToDefinedOperation(operation: 'transferencia'| 'historial'):void{
    operation === 'transferencia' ? this._router.navigateByUrl('/client/account-transactions') : this._router.navigateByUrl('/client/account-history');
  }


}

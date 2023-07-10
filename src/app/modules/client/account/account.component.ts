import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private _accountService:AccountService, private _changeDetector:ChangeDetectorRef) { }
  public accounts$:Observable<any>;
  ngOnInit(): void {
    this.accounts$ = this._accountService.accounts$;
    this._changeDetector.markForCheck();
  }

}

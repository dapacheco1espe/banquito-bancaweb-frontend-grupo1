import { Component, OnInit } from '@angular/core';
import { AccountOperationsDataShareService } from '../services/account-operations-data-share.service';
import { Account } from '../Models/Account';
import { AccountHistoryService } from './services/account-history.service';
import { AccountTransaction } from '../Models/AccountTransaction';
import { FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';


const transactionTypeTranslations = {
  ADJUSTMENT: 'Ajuste',
  WITHDRAWAL: 'Retiro',
  TRANSFER: 'Transferencia',
  PAYMENT: 'Pago',
  FEE_APPLIED: 'Comisión aplicada',
  INTEREST_AP: 'Interés aplicado',
  WITHHOLD_TA: 'Retención TA',
  LOAN_FUNDED: 'Préstamo financiado',
  LOAN_REPAID: 'Préstamo pagado',
};

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss']
})
export class AccountHistoryComponent implements OnInit {

  accountId: string = '0';
  accountData: any;

  public transaction!: AccountTransaction[];
  public filterForm: FormGroup;
  public showDatepicker: boolean = false;
  selectedStartDate;
  selectedEndDate;
  

  constructor(private _accountOperationDataShareService: AccountOperationsDataShareService,
    private accountTransaction: AccountHistoryService,private fb: FormBuilder
    ) { 
      this.filterForm = this.fb.group({
        startDate: null,
        endDate: null
      });
    }

  public account: Account;
  ngOnInit(): void {

    const currentDate = moment();
    const startDate = currentDate.clone().subtract(15, 'days');
    const endDate = currentDate;

    this.filterForm.patchValue({
      startDate: startDate.toDate(), 
      endDate: endDate.toDate(),

    });
    this.selectedStartDate=startDate.toDate();
    this.selectedEndDate=endDate.toDate();
    
    this._accountOperationDataShareService.account$.subscribe({
      next: (account: Account) => {
        this.account = account;
      }
    });
    this.getAccountTransaction();

    
  }

  public getAccountTransaction() {
    const accountUK = this.account.uniqueKey;
    const startDate = moment(this.selectedStartDate).toDate();
    const endDate = moment(this.selectedEndDate).add(1,'days').toDate();
    this.accountTransaction.getHistoryAccount(accountUK, startDate, endDate).subscribe({
      next: (response) => {
        this.transaction = response;
      },
      error: (error) => {
        this.transaction = []; 
      }
    });
  }
  
  



public transactions: any[]; 
  getTransactionTypeTranslation(type: string): string {
    return transactionTypeTranslations[type] || type;
  }


  toggleDatepicker() {
    this.showDatepicker = !this.showDatepicker;
  }

  get selectedMinStartDate(): string {
    return this.selectedStartDate ? moment(this.selectedStartDate).format('YYYY-MM-DD') : '';
  }
  
  
  get selectedMaxEndDate(): string {
    return this.selectedStartDate ? moment().format('YYYY-MM-DD') : '';
  }
  
  
  
}

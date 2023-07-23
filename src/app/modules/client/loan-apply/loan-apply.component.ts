import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.scss']
})
export class LoanApplyComponent implements OnInit {

  constructor(private router: Router) { }
  cuotas: string = '12';
  mostrarOtroCuotas: boolean = false;
  ngOnInit(): void {
    
  }
  public navigateToPages(page: 'loan-amortization') {
    this.router.navigateByUrl(`/client/${page}`);
  }
  onCuotasChange() {
    if (this.cuotas !== 'otro') {
      this.mostrarOtroCuotas = false; 
    }
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-apply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.scss']
})
export class LoanApplyComponent implements OnInit {

  constructor() { }
  cuotas: string = '12';
  mostrarOtroCuotas: boolean = false;
  ngOnInit(): void {
    
  }
  onCuotasChange() {
    if (this.cuotas !== 'otro') {
      this.mostrarOtroCuotas = false; 
    }
  }
  

}

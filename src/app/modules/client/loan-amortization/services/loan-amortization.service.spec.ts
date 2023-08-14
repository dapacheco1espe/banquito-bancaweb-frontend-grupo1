import { TestBed } from '@angular/core/testing';

import { LoanAmortizationService } from './loan-amortization.service';

describe('LoanAmortizationService', () => {
  let service: LoanAmortizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanAmortizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

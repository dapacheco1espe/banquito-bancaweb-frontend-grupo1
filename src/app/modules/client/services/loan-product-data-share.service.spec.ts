import { TestBed } from '@angular/core/testing';

import { LoanProductDataShareService } from './loan-product-data-share.service';

describe('LoanProductDataShareService', () => {
  let service: LoanProductDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanProductDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

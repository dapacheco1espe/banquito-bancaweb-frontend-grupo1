import { TestBed } from '@angular/core/testing';

import { LoanFormDataShareService } from './loan-form-data-share.service';

describe('LoanFormDataShareService', () => {
  let service: LoanFormDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanFormDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoanOperationsDataShareService } from './loan-operations-data-share.service';

describe('LoanOperationsDataShareService', () => {
  let service: LoanOperationsDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanOperationsDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

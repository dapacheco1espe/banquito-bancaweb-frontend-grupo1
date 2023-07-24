import { TestBed } from '@angular/core/testing';

import { AccountOperationsDataShareService } from './account-operations-data-share.service';

describe('AccountOperationsDataShareService', () => {
  let service: AccountOperationsDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOperationsDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

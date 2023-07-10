import { TestBed } from '@angular/core/testing';

import { AccountResumeService } from './account-resume.service';

describe('AccountResumeService', () => {
  let service: AccountResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

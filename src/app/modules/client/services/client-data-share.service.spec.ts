import { TestBed } from '@angular/core/testing';

import { ClientDataShareService } from './client-data-share.service';

describe('ClientDataShareService', () => {
  let service: ClientDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

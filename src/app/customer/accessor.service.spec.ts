import { TestBed } from '@angular/core/testing';

import { AccessorService } from './accessor.service';

describe('AccessorService', () => {
  let service: AccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

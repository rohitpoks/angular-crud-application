import { TestBed } from '@angular/core/testing';

import { LoggedInValidatorGuard } from './logged-in-validator.guard';

describe('LoggedInValidatorGuard', () => {
  let guard: LoggedInValidatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInValidatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

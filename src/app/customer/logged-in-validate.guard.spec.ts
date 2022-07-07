import { TestBed } from '@angular/core/testing';

import { LoggedInValidateGuard } from './logged-in-validate.guard';

describe('LoggedInValidateGuard', () => {
  let guard: LoggedInValidateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInValidateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

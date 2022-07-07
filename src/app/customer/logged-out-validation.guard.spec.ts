import { TestBed } from '@angular/core/testing';

import { LoggedOutValidationGuard } from './logged-out-validation.guard';

describe('LoggedOutValidationGuard', () => {
  let guard: LoggedOutValidationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedOutValidationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

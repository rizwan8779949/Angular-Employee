import { TestBed } from '@angular/core/testing';

import { LoginFailedGuard } from './login-failed.guard';

describe('LoginFailedGuard', () => {
  let guard: LoginFailedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginFailedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
}); 

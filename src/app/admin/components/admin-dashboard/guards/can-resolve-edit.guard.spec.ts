import { TestBed } from '@angular/core/testing';

import { CanResolveEditGuard } from './can-resolve-edit.guard';

describe('CanResolveEditGuard', () => {
  let guard: CanResolveEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanResolveEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

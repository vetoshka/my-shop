import { TestBed } from '@angular/core/testing';

import { UserArrayService } from './user-array.service';

describe('UserArrayService', () => {
  let service: UserArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

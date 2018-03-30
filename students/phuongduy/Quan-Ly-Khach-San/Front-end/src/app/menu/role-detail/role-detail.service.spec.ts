import { TestBed, inject } from '@angular/core/testing';

import { RoleDetailService } from './role-detail.service';

describe('RoleDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleDetailService]
    });
  });

  it('should be created', inject([RoleDetailService], (service: RoleDetailService) => {
    expect(service).toBeTruthy();
  }));
});

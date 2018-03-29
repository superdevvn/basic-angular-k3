import { TestBed, inject } from '@angular/core/testing';

import { RoleListService } from './role-list.service';

describe('RoleListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleListService]
    });
  });

  it('should be created', inject([RoleListService], (service: RoleListService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ListuserService } from './listuser.service';

describe('ListuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListuserService]
    });
  });

  it('should be created', inject([ListuserService], (service: ListuserService) => {
    expect(service).toBeTruthy();
  }));
});

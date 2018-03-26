import { TestBed, inject } from '@angular/core/testing';

import { SumService } from './sum.service';

describe('SumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SumService]
    });
  });

  it('should be created', inject([SumService], (service: SumService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { PhongService } from './phong.service';

describe('PhongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhongService]
    });
  });

  it('should be created', inject([PhongService], (service: PhongService) => {
    expect(service).toBeTruthy();
  }));
});

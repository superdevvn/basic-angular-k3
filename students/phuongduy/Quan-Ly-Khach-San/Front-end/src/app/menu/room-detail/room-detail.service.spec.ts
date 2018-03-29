import { TestBed, inject } from '@angular/core/testing';

import { RoomDetailService } from './room-detail.service';

describe('RoomDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomDetailService]
    });
  });

  it('should be created', inject([RoomDetailService], (service: RoomDetailService) => {
    expect(service).toBeTruthy();
  }));
});

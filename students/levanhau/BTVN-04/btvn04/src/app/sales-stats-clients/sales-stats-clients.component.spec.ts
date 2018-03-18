import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatsClientsComponent } from './sales-stats-clients.component';

describe('SalesStatsClientsComponent', () => {
  let component: SalesStatsClientsComponent;
  let fixture: ComponentFixture<SalesStatsClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStatsClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

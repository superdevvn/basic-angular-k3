import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardV1Component } from './dashboard-v1.component';

describe('DashboardV1Component', () => {
  let component: DashboardV1Component;
  let fixture: ComponentFixture<DashboardV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

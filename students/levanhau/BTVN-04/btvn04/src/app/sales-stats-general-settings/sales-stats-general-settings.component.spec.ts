import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatsGeneralSettingsComponent } from './sales-stats-general-settings.component';

describe('SalesStatsGeneralSettingsComponent', () => {
  let component: SalesStatsGeneralSettingsComponent;
  let fixture: ComponentFixture<SalesStatsGeneralSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStatsGeneralSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatsGeneralSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

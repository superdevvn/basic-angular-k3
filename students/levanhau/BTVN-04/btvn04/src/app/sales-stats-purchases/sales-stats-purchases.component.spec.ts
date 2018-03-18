import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatsPurchasesComponent } from './sales-stats-purchases.component';

describe('SalesStatsPurchasesComponent', () => {
  let component: SalesStatsPurchasesComponent;
  let fixture: ComponentFixture<SalesStatsPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStatsPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatsPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

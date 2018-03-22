import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStatsProductsComponent } from './sales-stats-products.component';

describe('SalesStatsProductsComponent', () => {
  let component: SalesStatsProductsComponent;
  let fixture: ComponentFixture<SalesStatsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStatsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStatsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

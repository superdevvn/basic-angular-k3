import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNo2Component } from './layout-no2.component';

describe('LayoutNo2Component', () => {
  let component: LayoutNo2Component;
  let fixture: ComponentFixture<LayoutNo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

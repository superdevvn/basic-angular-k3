import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNo1Component } from './layout-no1.component';

describe('LayoutNo1Component', () => {
  let component: LayoutNo1Component;
  let fixture: ComponentFixture<LayoutNo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

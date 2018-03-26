import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNo3Component } from './layout-no3.component';

describe('LayoutNo3Component', () => {
  let component: LayoutNo3Component;
  let fixture: ComponentFixture<LayoutNo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

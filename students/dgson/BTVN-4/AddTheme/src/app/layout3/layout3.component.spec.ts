import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout3Component } from './layout3.component';

describe('Layout3Component', () => {
  let component: Layout3Component;
  let fixture: ComponentFixture<Layout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

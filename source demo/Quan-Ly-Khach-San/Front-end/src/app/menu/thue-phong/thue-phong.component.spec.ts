import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuePhongComponent } from './thue-phong.component';

describe('ThuePhongComponent', () => {
  let component: ThuePhongComponent;
  let fixture: ComponentFixture<ThuePhongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuePhongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuePhongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

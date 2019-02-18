import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16LoginComponent } from './demo16-login.component';

describe('Demo16LoginComponent', () => {
  let component: Demo16LoginComponent;
  let fixture: ComponentFixture<Demo16LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

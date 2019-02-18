import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16RegisterComponent } from './demo16-register.component';

describe('Demo16RegisterComponent', () => {
  let component: Demo16RegisterComponent;
  let fixture: ComponentFixture<Demo16RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

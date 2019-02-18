import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16RegisteComponent } from './demo16-registe.component';

describe('Demo16RegisteComponent', () => {
  let component: Demo16RegisteComponent;
  let fixture: ComponentFixture<Demo16RegisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16RegisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16RegisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

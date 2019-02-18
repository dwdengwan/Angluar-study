import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09InputComponent } from './demo09-input.component';

describe('Demo09InputComponent', () => {
  let component: Demo09InputComponent;
  let fixture: ComponentFixture<Demo09InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

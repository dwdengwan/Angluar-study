import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19LoginComponent } from './demo19-login.component';

describe('Demo19LoginComponent', () => {
  let component: Demo19LoginComponent;
  let fixture: ComponentFixture<Demo19LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15ListComponent } from './demo15-list.component';

describe('Demo15ListComponent', () => {
  let component: Demo15ListComponent;
  let fixture: ComponentFixture<Demo15ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

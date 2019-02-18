import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15ItemComponent } from './demo15-item.component';

describe('Demo15ItemComponent', () => {
  let component: Demo15ItemComponent;
  let fixture: ComponentFixture<Demo15ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

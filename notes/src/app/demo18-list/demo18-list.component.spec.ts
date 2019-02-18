import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18ListComponent } from './demo18-list.component';

describe('Demo18ListComponent', () => {
  let component: Demo18ListComponent;
  let fixture: ComponentFixture<Demo18ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

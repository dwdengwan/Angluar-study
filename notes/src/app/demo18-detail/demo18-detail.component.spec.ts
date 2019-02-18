import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18DetailComponent } from './demo18-detail.component';

describe('Demo18DetailComponent', () => {
  let component: Demo18DetailComponent;
  let fixture: ComponentFixture<Demo18DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

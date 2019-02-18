import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08CartComponent } from './demo08-cart.component';

describe('Demo08CartComponent', () => {
  let component: Demo08CartComponent;
  let fixture: ComponentFixture<Demo08CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

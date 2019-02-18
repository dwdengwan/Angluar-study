import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17OrderConfirmComponent } from './demo17-order-confirm.component';

describe('Demo17OrderConfirmComponent', () => {
  let component: Demo17OrderConfirmComponent;
  let fixture: ComponentFixture<Demo17OrderConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17OrderConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17OrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

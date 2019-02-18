import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17CartComponent } from './demo17-cart.component';

describe('Demo17CartComponent', () => {
  let component: Demo17CartComponent;
  let fixture: ComponentFixture<Demo17CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14HttpComponent } from './demo14-http.component';

describe('Demo14HttpComponent', () => {
  let component: Demo14HttpComponent;
  let fixture: ComponentFixture<Demo14HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

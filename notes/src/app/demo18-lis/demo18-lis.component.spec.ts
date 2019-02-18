import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo18LisComponent } from './demo18-lis.component';

describe('Demo18LisComponent', () => {
  let component: Demo18LisComponent;
  let fixture: ComponentFixture<Demo18LisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo18LisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo18LisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

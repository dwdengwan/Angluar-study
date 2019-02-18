import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08HeaderComponent } from './demo08-header.component';

describe('Demo08HeaderComponent', () => {
  let component: Demo08HeaderComponent;
  let fixture: ComponentFixture<Demo08HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

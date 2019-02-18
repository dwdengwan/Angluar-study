import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16NotFoundComponent } from './demo16-not-found.component';

describe('Demo16NotFoundComponent', () => {
  let component: Demo16NotFoundComponent;
  let fixture: ComponentFixture<Demo16NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16NotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

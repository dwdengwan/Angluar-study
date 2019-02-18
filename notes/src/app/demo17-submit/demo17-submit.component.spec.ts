import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17SubmitComponent } from './demo17-submit.component';

describe('Demo17SubmitComponent', () => {
  let component: Demo17SubmitComponent;
  let fixture: ComponentFixture<Demo17SubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17SubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

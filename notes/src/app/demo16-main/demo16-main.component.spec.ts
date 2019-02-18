import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16MainComponent } from './demo16-main.component';

describe('Demo16MainComponent', () => {
  let component: Demo16MainComponent;
  let fixture: ComponentFixture<Demo16MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16MainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

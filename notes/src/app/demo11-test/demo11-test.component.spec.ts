import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11TestComponent } from './demo11-test.component';

describe('Demo11TestComponent', () => {
  let component: Demo11TestComponent;
  let fixture: ComponentFixture<Demo11TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

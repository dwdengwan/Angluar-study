import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13XiongbaComponent } from './demo13-xiongba.component';

describe('Demo13XiongbaComponent', () => {
  let component: Demo13XiongbaComponent;
  let fixture: ComponentFixture<Demo13XiongbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13XiongbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13XiongbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

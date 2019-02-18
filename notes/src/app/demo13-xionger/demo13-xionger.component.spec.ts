import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13XiongerComponent } from './demo13-xionger.component';

describe('Demo13XiongerComponent', () => {
  let component: Demo13XiongerComponent;
  let fixture: ComponentFixture<Demo13XiongerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13XiongerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13XiongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

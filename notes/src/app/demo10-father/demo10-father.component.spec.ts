import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10FatherComponent } from './demo10-father.component';

describe('Demo10FatherComponent', () => {
  let component: Demo10FatherComponent;
  let fixture: ComponentFixture<Demo10FatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10FatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

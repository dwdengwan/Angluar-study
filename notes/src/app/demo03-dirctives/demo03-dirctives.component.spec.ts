import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo03DirctivesComponent } from './demo03-dirctives.component';

describe('Demo03DirctivesComponent', () => {
  let component: Demo03DirctivesComponent;
  let fixture: ComponentFixture<Demo03DirctivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo03DirctivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo03DirctivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

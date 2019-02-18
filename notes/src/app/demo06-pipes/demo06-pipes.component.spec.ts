import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo06PipesComponent } from './demo06-pipes.component';

describe('Demo06PipesComponent', () => {
  let component: Demo06PipesComponent;
  let fixture: ComponentFixture<Demo06PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo06PipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo06PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

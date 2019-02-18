import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10SonComponent } from './demo10-son.component';

describe('Demo10SonComponent', () => {
  let component: Demo10SonComponent;
  let fixture: ComponentFixture<Demo10SonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10SonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10SonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

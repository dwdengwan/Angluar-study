import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo20AdminComponent } from './demo20-admin.component';

describe('Demo20AdminComponent', () => {
  let component: Demo20AdminComponent;
  let fixture: ComponentFixture<Demo20AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo20AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo20AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09ChatroomComponent } from './demo09-chatroom.component';

describe('Demo09ChatroomComponent', () => {
  let component: Demo09ChatroomComponent;
  let fixture: ComponentFixture<Demo09ChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09ChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09ChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

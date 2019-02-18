import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19InboxComponent } from './demo19-inbox.component';

describe('Demo19InboxComponent', () => {
  let component: Demo19InboxComponent;
  let fixture: ComponentFixture<Demo19InboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19InboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

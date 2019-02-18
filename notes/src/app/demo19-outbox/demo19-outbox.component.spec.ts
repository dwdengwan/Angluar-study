import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19OutboxComponent } from './demo19-outbox.component';

describe('Demo19OutboxComponent', () => {
  let component: Demo19OutboxComponent;
  let fixture: ComponentFixture<Demo19OutboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19OutboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19OutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

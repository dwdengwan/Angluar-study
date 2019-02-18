import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo19MailComponent } from './demo19-mail.component';

describe('Demo19MailComponent', () => {
  let component: Demo19MailComponent;
  let fixture: ComponentFixture<Demo19MailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo19MailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo19MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

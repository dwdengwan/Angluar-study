import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12LianxiComponent } from './demo12-lianxi.component';

describe('Demo12LianxiComponent', () => {
  let component: Demo12LianxiComponent;
  let fixture: ComponentFixture<Demo12LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

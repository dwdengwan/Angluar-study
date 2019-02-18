import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13XiongdaComponent } from './demo13-xiongda.component';

describe('Demo13XiongdaComponent', () => {
  let component: Demo13XiongdaComponent;
  let fixture: ComponentFixture<Demo13XiongdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13XiongdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13XiongdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

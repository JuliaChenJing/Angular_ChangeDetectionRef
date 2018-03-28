import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TogleEventComponent } from './togle-event.component';

describe('TogleEventComponent', () => {
  let component: TogleEventComponent;
  let fixture: ComponentFixture<TogleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TogleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TogleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

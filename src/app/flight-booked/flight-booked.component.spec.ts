import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookedComponent } from './flight-booked.component';

describe('FlightBookedComponent', () => {
  let component: FlightBookedComponent;
  let fixture: ComponentFixture<FlightBookedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightBookedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

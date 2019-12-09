import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-flight-item',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit, OnChanges {
  @Input() itinerary: any;
  @Input() origin: string;
  @Input() dest: string;
  totalTime: string;
  segments: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.totalTime = this.itinerary.totalTime;
    this.segments = this.itinerary.listOfFlights.map(flight => flight.origin.code).join(' - ') + ' - ' + this.dest;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import itineraries from '../data/itinerary';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  @Input() origin: string = 'DFW';
  @Input() dest: string = 'ORD';
  itineraries = [];



  constructor() { }

  ngOnInit() {
    // console.log(this.itineraries);
  }
}

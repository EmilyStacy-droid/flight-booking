import { Component, OnInit, Input } from '@angular/core';
import itineraries from '../data/itinerary';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  @Input() origin: string = 'DFW';
  @Input() dest: string = 'ORD';
  @Input()passData:[];
  itineraries;
  dataSubject: any;


  constructor(public searchService: SearchService) {
    this.itineraries = itineraries;
   }

  ngOnInit() {
    this.dataSubject = this.searchService.passData.subscribe(data => {
      this.itineraries = data;
    });
  }
}

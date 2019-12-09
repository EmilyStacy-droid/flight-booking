import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import airportsData from '../data/airports';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import airports from '../data/airports';
import {SearchService} from './search.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // date:string;
  // originAirport:string;
  // destinationAirport:string;
  date;
  events: string[] = [];
  startDate = new Date(2019, 12, 1);
  origin: FormControl = new FormControl();
  destination: FormControl = new FormControl();
  airports: string[] = airportsData.map((airport: Airport) => airport.code);
  filteredOrigin: Observable<string[]>;
  filteredDestination: Observable<string[]>;

  constructor(private searchService: SearchService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.filteredOrigin = this.origin.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    this.filteredDestination = this.destination.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
   
  }

  private _filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();

    return this.airports.filter(airport => airport.toLowerCase().includes(filterValue));
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.target.value}`);
    this.date = this.datePipe.transform(new Date(this.events[0].toString()),"yyyy-MM-dd");
   
  }

  onSubmit() {
    
    //console.log("picker is" +this.picker);
    // var searchURL = "localhost/8080/flights?origin=" + this.origin.value +"& destination=" + this.destination.value;
    console.log("this works" + this.date);
    this.searchService.addSearch(this.origin.value,this.destination.value, this.date);
    
  }
}

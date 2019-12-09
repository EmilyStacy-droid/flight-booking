import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import airportsData from '../data/airports';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import airports from '../data/airports';
import {SearchService} from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // date:string;
  // originAirport:string;
  // destinationAirport:string;

  picker:FormControl = new FormControl();;
  startDate = new Date(2019, 12, 1);
  origin: FormControl = new FormControl();
  destination: FormControl = new FormControl();
  airports: string[] = airportsData.map((airport: Airport) => airport.code);
  filteredOrigin: Observable<string[]>;
  filteredDestination: Observable<string[]>;
  results: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.filteredOrigin = this.origin.valueChanges.pipe(startWith(''), map(value => this._filter(value)));
    this.filteredDestination = this.destination.valueChanges.pipe(startWith(''), map(value => this._filter(value)));

  }

  private _filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();

    console.log(this.origin);

    return this.airports.filter(airport => airport.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log("this works");
    console.log('picker is' + this.picker.value);
    this.searchService.addSearch(this.origin.value,this.destination.value);
  }
}

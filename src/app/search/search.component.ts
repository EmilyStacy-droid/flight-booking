import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
picker;
startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}

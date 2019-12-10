import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    baseURL = "http://localhost:8080/flights";
    // ?origin={origin}&destination={destination}&date=2019-12-09"

    constructor(public http: HttpClient, private router:Router) {}
    
    @Output() passData: EventEmitter<any> = new EventEmitter();


    addSearch (origin, destination,date): Observable<any> {
        this.passData.emit(this.http.get<any>(this.baseURL + `?origin=${origin}&destination=${destination}&date=${date}`));
        return this.http.get<any>(this.baseURL + `?origin=${origin}&destination=${destination}&date=${date}`);
      }

}
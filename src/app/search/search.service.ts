import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    baseURL = "http://localhost:8080/flights";
    // ?origin={origin}&destination={destination}&date=2019-12-09"

    constructor(public http: HttpClient) {}

    addSearch (origin, destination,date): Observable<any> {
        return this.http.get<any>(this.baseURL + `?origin=${origin}&destination=${destination}&date=${date}`)
      }

}
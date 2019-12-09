import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    baseURL = "localhost/8080/flights"

    constructor(public http: HttpClient) {}

    addSearch (origin, destination): Observable<any> {
        
        return this.http.post<any>(this.baseURL, origin, destination)
      }

}
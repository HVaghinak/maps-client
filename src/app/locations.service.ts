import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class LocationsService {

  default_url = 'http://127.0.0.1:8000/locations/';

  constructor(private http: HttpClient) { }

  getLocations() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.default_url, {headers});
  }

  setLocation(location){
    return this.http.post(this.default_url, location);
  }

  resetLocations(confirmation) {
    const url = 'http://127.0.0.1:8000/location/reset-locations/';
    return this.http.post(url, {reset: confirmation});
  }
}

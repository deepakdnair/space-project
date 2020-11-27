import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ApiServices {
  constructor(private http: HttpClient) {}

  serialize(obj) {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }

    getAllData(params): Observable<any> {
        return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100' + '&' +  this.serialize(params));
    }
}

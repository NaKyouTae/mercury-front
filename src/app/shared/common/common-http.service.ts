import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
  constructor(private http: HttpClient) {}

  httpCallGet(service, params?) {
    const hearder = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'
    });

    return this.http.get('http://localhost:8080/' + service, {
      headers: hearder,
      params: params
    });
  }
  httpCallPost(service, params) {
    const hearder = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost:8080/' + service, params, {
      headers: hearder,
      params: params
    });
  }
}

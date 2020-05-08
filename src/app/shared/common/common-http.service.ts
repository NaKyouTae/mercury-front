import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {
  constructor(private http: HttpClient) { }

  httpCallGet(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
    });

    return this.http.get('http://localhost:8090/' + service, {
      headers: header,
      params
    });
  }
  httpCallPost(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
    });

    return this.http.post('http://localhost:8090/' + service, params, {
      headers: header,
      params
    });
  }

  httpCallPut(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
    });

    return this.http.put('http://localhost:8090/' + service, JSON.stringify(params), { headers: header });
  }

  httpCallDelete(service: any, params?: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
    });

    const options = {
      headers: header,
      body: params
    };

    return this.http.delete('http://localhost:8090/' + service, options);
  }
}

export class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}

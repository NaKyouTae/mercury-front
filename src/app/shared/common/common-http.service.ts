import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParameterCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  constructor(private http: HttpClient) { }

  public httpCallGet(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });

    return this.http.get('http://localhost:8090/' + service, {
      headers: header,
      params,
    });
  }

  public httpCallPost(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });

    const options = {
      headers: header,
    };

    return this.http.post('http://localhost:8090/' + service, params, options);
  }

  public httpCallPut(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });

    return this.http.put('http://localhost:8090/' + service, JSON.stringify(params), { headers: header });
  }

  public httpCallDelete(service: any, params?: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });

    const options = {
      headers: header,
      body: params,
    };

    return this.http.delete('http://localhost:8090/' + service, options);
  }
}

export class CustomEncoder implements HttpParameterCodec {
  public encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  public encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  public decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  public decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}

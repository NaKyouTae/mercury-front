import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParameterCodec } from '@angular/common/http';
import { EnDecodingService } from '../en-deconding/en-decoding.service';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  constructor(private http: HttpClient, private enDecodingService: EnDecodingService) {}

  public httpCallGet(service, queryString?: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });
    let params: any;

    if (queryString !== undefined) {
      // params = this.enDecodingService.enCoding(queryString);
      // params = encodeURIComponent(queryString);
      params = queryString;
    }

    return this.http.get('/' + service, {
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

    return this.http.post('/' + service, params, options);
  }

  public httpCallPut(service, params?) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
    });

    return this.http.put('/' + service, JSON.stringify(params), { headers: header });
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

    return this.http.delete('/' + service, options);
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

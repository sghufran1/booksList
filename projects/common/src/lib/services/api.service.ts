import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

export interface OptionsParams {
  uriParams?: any;
  queryParams?: any;
  body?: any;
  responseType?: any;
}

export interface Header {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    protected http: HttpClient
  ) {}

  prepareURI(uri: string, uriParams: any = null): string {
    let preparedURI = `http://localhost:8080`;
    let newUri = uri;
    for (const property in uriParams) {
      if (uriParams.hasOwnProperty(property)) {
        newUri = newUri.replace(`{${property}}`, uriParams[property]);
      }
    }
    preparedURI += newUri;
    return preparedURI;
  }

  prepareHttpOptions(options: OptionsParams, header?: Header): { headers: HttpHeaders; responseType: any } {
    const reqHeaders: Header = {
      'Content-Type': 'application/json'
    };

    if (header) {
      _.assign(reqHeaders, header);
    }

    return {
      headers: new HttpHeaders(reqHeaders),
      responseType: options.responseType,
    };
  }

  get<T>(uri: string, options: OptionsParams = {}, header?: Header): Observable<T> {
    const endPoint = this.prepareURI(uri, options.uriParams);
    return this.http.get<T>(endPoint, this.prepareHttpOptions(options, header));
  }

  post<T>(uri: string, body: any = null, options: OptionsParams = {}, header?: Header): Observable<T> {
    const endPoint = this.prepareURI(uri, options.uriParams);
    return this.http.post<T>(endPoint, body, this.prepareHttpOptions(options, header));
  }

  delete<T>(uri: string, options: OptionsParams = {}, header?: Header): Observable<T> {
    const endPoint = this.prepareURI(uri, options.uriParams);
    return this.http.delete<T>(endPoint, this.prepareHttpOptions(options, header));
  }

  put<T>(uri: string, body: any = null, options: OptionsParams = {}, header?: Header): Observable<T> {
    const endPoint = this.prepareURI(uri, options.uriParams);
    return this.http.put<T>(endPoint, body, this.prepareHttpOptions(options, header));
  }

  patch<T>(uri: string, body: any = null, options: OptionsParams = {}, header?: Header): Observable<T> {
    const endPoint = this.prepareURI(uri, options.uriParams);
    return this.http.patch<T>(endPoint, body, this.prepareHttpOptions(options, header));
  }
}

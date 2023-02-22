import { Injectable } from '@angular/core';
import { ApiService } from 'dist/common/lib/services/api.service.d';
import { Observable, Subject } from 'rxjs';
import { BooksData } from '../models/books-data';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  activatedEmitter = new Subject<string>();
  // endPoint = '/books/v1/volumes';
  endPoint = '/books/v1';
   searchQuery = '?volumes={query}';

  constructor(protected apiService: ApiService) {}

  getBooksDetails(query: string): Observable<BooksData[]> {
    return this.apiService.get(this.endPoint + this.searchQuery, {
      uriParams: {
        query,
      },
    });
  }
}

import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BooksData } from '../../../models/books-data';
import { BehaviorSubject, catchError, Observable, of, Subject, takeUntil } from 'rxjs';
import { BooksApiService } from '../../../services/books-api.service';

@Component({
  selector: 'books-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(
    private booksApiService: BooksApiService
  ){
  }

  fetchDetails($event: Event){
    const query = (<HTMLInputElement>$event.target).value;
    this.booksApiService.activatedEmitter.next(query);
    }
}

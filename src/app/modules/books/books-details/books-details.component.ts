import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BooksData } from '../../../models/books-data';
import { catchError, map, Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { BooksApiService } from '../../../services/books-api.service';

@Component({
  selector: 'books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss']
})
export class BooksDetailsComponent implements OnInit, OnDestroy {
  private readonly _ngUnsubscribe = new Subject<void>();
  isLoading = true;
  private activatedSub: Subscription = new Subscription;
  query: string;
  booksData: BooksData[] = [];

  
  constructor(
    private booksApiService: BooksApiService
  ){
    this.query = "";
  }

  ngOnInit(){
    this.activatedSub = this.booksApiService.activatedEmitter.subscribe(data => {
      this.query = data;
      this.booksApiService.getBooksDetails(this.query).pipe(map(response => {
        const booksArray: any[] = [];
        response.map((obj) => {
          booksArray.push(obj);
        })
        return booksArray;
      }),
        takeUntil(this._ngUnsubscribe),
        
      ).subscribe((response) => {
        if(response){
          this.booksData = response;
        }
        this.isLoading = false;
      });
    });
    }
  
    ngOnDestroy(): void {
      this._ngUnsubscribe.next();
      this._ngUnsubscribe.complete();
      this.activatedSub.unsubscribe();
    }
}

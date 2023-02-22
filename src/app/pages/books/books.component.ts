import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BooksData } from '../../models/books-data';
import { BooksApiService } from '../../services/books-api.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy{
  private activatedSub: Subscription = new Subscription;
  query: string;

  
  constructor(
    private booksApiService: BooksApiService
  ){
    this.query = "";
  }

  ngOnInit() {

    this.activatedSub = this.booksApiService.activatedEmitter.subscribe(data => {
      this.query = data;
    })
      
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}

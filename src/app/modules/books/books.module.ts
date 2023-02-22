import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { BooksDetailsPlaceholderComponent } from './books-details-placeholder/books-details-placeholder.component';



@NgModule({
  declarations: [
    BooksDetailsComponent,
    BooksDetailsPlaceholderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BooksDetailsComponent],
})
export class BooksModule { }

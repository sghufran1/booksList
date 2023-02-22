import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchPlaceholderComponent } from './search-placeholder/search-placeholder.component';



@NgModule({
  declarations: [
    SearchComponent,
    SearchPlaceholderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SearchComponent],
})
export class SearchModule { }

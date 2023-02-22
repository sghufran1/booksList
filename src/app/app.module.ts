import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from 'dist/common';
import { SearchModule } from './modules/search/search.module';
import { BooksModule } from './modules/books/books.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { BooksComponent } from './pages/books/books.component';

// import { ApiService } from '@services/api.service';
import { ApiService } from 'dist/common/lib/services/api.service.d';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainHeaderComponent,
    MainMenuComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SearchModule,
    BooksModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

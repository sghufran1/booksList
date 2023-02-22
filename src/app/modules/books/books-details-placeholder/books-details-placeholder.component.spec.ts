import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDetailsPlaceholderComponent } from './books-details-placeholder.component';

describe('BooksDetailsPlaceholderComponent', () => {
  let component: BooksDetailsPlaceholderComponent;
  let fixture: ComponentFixture<BooksDetailsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDetailsPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksDetailsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: Observable<Book[]> = this.httpService.getBookList();

  constructor(
    private httpService:HttpService,
  ) { }

  ngOnInit(): void {
  }

  getBookList(

  ){}

  readBook(bookObj){}

}

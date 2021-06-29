import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Book } from '../model/book';

import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/books';

  constructor(
    private http:HttpClient,) { }

  getBookList():Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_URL);
  }

  readABook(id, book):Observable<Book[]>{
    return this.http.get<Book[]>(`${this.BASE_URL}/${id}`);
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.BASE_URL}`, book);
  }



    update(user: Book): Observable<Book> {
    return this.http.patch<Book>(`${this.BASE_URL}/${Book.id}`, Book);
   }
}

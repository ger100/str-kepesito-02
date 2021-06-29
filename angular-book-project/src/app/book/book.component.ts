import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private httpService:HttpService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }

  saveBook(book: Book):void{
    book.id = Number(book.id)
    if(book.id === 0){
      this.httpService.create(book).subscribe(
        ev => this.router.navigate(['']),
        () => this.httpService.getBookList()
      );
    } else {
      this.httpService.update(book).subscribe(
        ev => this.router.navigate([''])
      );
    }
  }

}

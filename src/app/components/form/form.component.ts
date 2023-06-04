import { Component } from '@angular/core';
import {Book} from "../../Book"
import {booksArr} from "../../Books"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  booksArr: Book[] = booksArr
  userBook: string = "";
  matchedBook: Book = {title: "",author: "",publish_date: ""}

  filter(){
    for(let book of this.booksArr){
      if(book.title.toLowerCase()===this.userBook.toLowerCase()){this.matchedBook = book}
    }
  }
}
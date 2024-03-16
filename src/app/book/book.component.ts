import { Component } from '@angular/core';
import { Book } from '../models/book';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
    
    newBookTitle:string = "";
    newBookAuthor:string = "";
    allBooks: Book[] = [];

    ngOnInit(): void {
      var savedBooks = localStorage.getItem("books");
      this.allBooks = savedBooks != null ? JSON.parse(savedBooks):[];
    }
    
    onAddBook():void {

      if(this.newBookTitle.length > 0 && this.newBookAuthor.length>0){
        this.allBooks.push({
          id: Date.now(),
          title: this.newBookTitle,
          author: this.newBookAuthor
        });
        localStorage.setItem("books",JSON.stringify(this.allBooks));
        this.newBookTitle="";
        this.newBookAuthor="";
      }
    }

    onDeleteBook(index:number):void{
      this.allBooks.splice(index,1);
      localStorage.setItem("books",JSON.stringify(this.allBooks));
    }
}

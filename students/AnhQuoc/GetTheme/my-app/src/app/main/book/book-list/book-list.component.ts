import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: any[];

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
        this.bookService.getBooks()
            .then((books: any[]) => {
                this.books = books;
                console.log(this.books);
            })
            .catch(err => {
                alert(err);
            })
    }

}

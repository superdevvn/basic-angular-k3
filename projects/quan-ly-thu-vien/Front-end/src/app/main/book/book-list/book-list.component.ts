import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: any[];

    constructor(private bookService: BookService, private router: Router) {
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

    create() {
        this.router.navigate(['/main/book', 0]);
    }

    deleteBook(id) {
        this.bookService.deleteBook(id)
            .then(() => {
                this.bookService.getBooks()
                    .then((books: any[]) => {
                        this.books = books;
                    })
            })
    }

}

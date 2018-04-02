import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../service/notification.service";

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    books: any[];
    loading = false;

    constructor(private bookService: BookService, private router: Router, private notification: NotificationService) {
    }

    ngOnInit() {
        this.loading = true;
        this.bookService.getBooks()
            .then((books: any[]) => {
                this.books = books;
                console.log(this.books);
                this.loading = false;
            })
            .catch(err => {
                alert(err);
            })
    }

    create() {
        this.router.navigate(['/main/book', 0]);
    }

    deleteBook(id) {
        this.notification.confirm('delete book').then(() => {
            this.loading = true;
            this.bookService.deleteBook(id)
                .then(() => {
                    this.loading = false;
                    this.bookService.getBooks()
                        .then((books: any[]) => {
                            this.books = books;
                        })
                })
        })

    }

}

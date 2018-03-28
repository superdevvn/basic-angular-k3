import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: any = {};
    books: any[];
    categories: any[];
    id: number;

    constructor(private bookService: BookService,
                private activatedRoute: ActivatedRoute,
                private router: Router,

    ) {
    }

    ngOnInit() {
    }

}

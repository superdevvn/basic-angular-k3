import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {NotificationService} from "../../../service/notification.service";

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

    book: any = {};
    categories: any[];
    id: number;
    isEdit = false;
    loading = false;
    constructor(private bookService: BookService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private categoryService: CategoryService,
                private notification: NotificationService) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params.subscribe(params => {
            this.categoryService.getCategories()
                .then((categories: any) => {
                    this.categories = categories;
                    if (this.id == 0) {
                        console.log("category 0",categories[0]);
                        this.book.CategoryId = categories[0].Id;
                        console.log("Category ID", this.book.CategoryId);
                        this.loading = false;
                    }
                });
            this.id = +params['id'];
            if (this.id > 0) {
                this.bookService.getBookByID(this.id)
                    .then(res => {
                        this.book = res;
                        console.log(" this is book", res);
                        this.loading = false;
                    })
            }
        })
    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    save() {

        this.bookService.saveBook(this.book)
            .then((res: any) => {
                if (this.id === 0) {
                    this.router.navigate(['/main/book-list']);
                } else {
                    this.notification.printEditSuccess();
                }
            })
    }

}

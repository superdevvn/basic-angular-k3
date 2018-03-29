import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: any[];


    constructor(private categoryService: CategoryService, private router: Router) {
    }

    ngOnInit() {
        this.categoryService.getCategories()
            .then((res: any[]) => {
                this.categories = res;
            })
            .catch(err => {
                alert(err);
            })
    }

    create() {
        this.router.navigate(['/main/category', 0]);
    }


    delete(customer) {
        this.categoryService.deleteRole(customer.Id)
            .then(() => {
                this.categoryService.getCategories()
                    .then((res: any[]) => {
                        this.categories = res;
                    })
                    .catch(err => alert(err));
            })
    }
}

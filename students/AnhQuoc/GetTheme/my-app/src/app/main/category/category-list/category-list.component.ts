import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

    categories: any[];

    constructor(private categoryService: CategoryService) {
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

}

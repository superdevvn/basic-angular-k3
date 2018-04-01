import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../category.service";
import {NotificationService} from "../../../service/notification.service";

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

    id: number;
    category: any = {};
    loading = false;

    isEdit = false;

    constructor(private activatedRoute: ActivatedRoute,
                private categoryService: CategoryService,
                private notification: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.categoryService.getCategoryByID(this.id)
                    .then(res => {
                        this.category = res;
                        this.loading = false;
                    })
            }
            this.loading = false;
        })


    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    save() {
        this.categoryService.saveCategory(this.category)
            .then(res => {
                if (this.id === 0) {
                    this.router.navigate(['/main/category-list']);
                } else {
                    this.notification.printEditSuccess();
                }
            })
    }

}

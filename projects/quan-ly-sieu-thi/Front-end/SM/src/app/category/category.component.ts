import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './category.service';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[];
  constructor(private router: Router,
    private categoryService: CategoryService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.categoryService.getCategories().then((categories: any[]) => {
      this.categories = categories;
      this.loadingService.stop();
    }).catch(err => {
      this.notifyService.error("Loading data failure!");
      this.loadingService.stop();
    });
  }

  newCategory() {
    this.router.navigate(['main/cate-detail', 0]);
  }

  detail(category) {
    this.router.navigate(['main/cate-detail', category.Id]);
  }

  delete(category) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.categoryService.deleteCategory(category.Id).then(() => {
        this.notifyService.success("Delete successful!");
        this.categoryService.getCategories().then((categories: any) => {
          this.categories = categories;
        }).catch(err => {
          this.notifyService.error("Reloading failed!");
        });
      }).catch(err => {
        this.notifyService.error(err.message);
      })
    }).catch(err => {
      this.notifyService.error("Deleting failed!");
    });
  }
}

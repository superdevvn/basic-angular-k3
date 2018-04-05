import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[];
  constructor(
    private cookieService: CookieService,
    private categoryService: CategoryService,
    private router: Router,
    private loadingService: LoadingService,
    private notifyService: NotifyService
  ) { }

    ngOnInit() {
    this.loadingService.start();
    this.categoryService.getCategories().then((categories: any[]) => {
      this.categories = categories;
      this.loadingService.stop();
    });
    
  }
<<<<<<< HEAD
  newCategory() {
    this.router.navigate(['main/category-detail', 0]);
  }
  detail(category){
    this.router.navigate(['main/category-detail', category.Id]);
  }
  delete(id: number) {
    this.notifyService.confirm("Bạn có muốn xóa không?").then(()=>{
      this.categoryService.deleteCategory(id).then(() => {
        this.categoryService.getCategories().then((categories: any[]) => {
          this.categories = categories;
        });
      });
      this.notifyService.printDeleteSuccess();
    }).catch(()=>{
    });
  }
=======
    newCategory() {
      this.router.navigate(['main/category-detail', 0]);
    }
    detail(category){
      this.router.navigate(['main/category-detail', category.Id]);
    }

    // delete(category){

    // }
>>>>>>> d5c891c60fca61f77385c4f78ea06d6599fad69a
}

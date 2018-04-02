import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CategoryService } from './category.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

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
    private loadingService: LoadingService
  ) { }

    ngOnInit() {
    
    this.categoryService.getCategories().then((categories: any[]) => {
      this.categories = categories;
    });
  }
  newCategory() {
    this.router.navigate(['main/category-detail', 0]);
  }
  detail(category){
    this.router.navigate(['main/category-detail', category.Id]);
  }
}

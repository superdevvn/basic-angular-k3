import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './category.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
})
export class CategoryDetailComponent implements OnInit {
    Id: number;
    category: any = {};
    routerSubscription: any;
    title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.categoryService.getCategory(this.Id).then(category=>{
                this.category = category;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  save(){
    this.categoryService.save(this.category).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}

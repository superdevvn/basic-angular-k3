import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CategoryService } from './cate.service';
@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
roles: any[];
  constructor(private categoryService: CategoryService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.categoryService.getCategories().then((roles:any[])=>{
    this.roles = roles;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(role){

      this.router.navigate(["/main/category-detail",role.Id]);
    }

    create(){
      this.router.navigate(["/main/category-detail",0]);
    }

    delete(role) {
      this.categoryService.deleteRole(role.Id).then(() => {
        this.categoryService.getCategories().then((roles: any[]) => {
          this.roles = roles;
        });
      });
      this.Notification.success('Deleted');
    }

    
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-cate-detail',
  templateUrl: './cate-detail.component.html',
  styleUrls: ['./cate-detail.component.css']
})
export class CateDetailComponent implements OnInit {
  id: number;
  category: any = {};
  categories: any[];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryService.getCategories().then((categories: any) => {
        this.categories = categories;
        if (this.id == 0) {
          this.category.ParentId = categories[0].Id;
        }
      });
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.categoryService.getCategory(this.id).then(category => {
          this.category = this.category;
          this.loadingService.stop();
        }).catch(err => {
          this.notifyService.error("Loading failed!");
          this.loadingService.stop();
        });
      };
    });
  }

  cancel() {
    this.router.navigate(['main/cate-list']);
  }

  //chưa save đc
  save() {
    this.categoryService.saveCategory(this.category).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/cate-detail", res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(["main/cate-list"]);
    }).catch(err => {
      this.notifyService.error("Save failure!");
    });
  }
}

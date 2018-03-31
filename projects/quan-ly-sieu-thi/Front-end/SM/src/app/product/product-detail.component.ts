import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { UnitService } from '../unit/unit.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: any = {};
  categories: any[];
  manus: any[];
  units: any[];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private notifyService: NotifyService,
    private loadingService: LoadingService,
    private manuService: ManufacturerService,
    private unitService: UnitService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryService.getCategories().then((categories: any) => {
        this.categories = categories;
        if (this.id == 0) {
          this.product.CategoryId = categories[0].Id;
        }
      });
      this.manuService.getManus().then((manus: any) => {
        this.manus = manus;
        if (this.id == 0) {
          this.product.ManufacturerId = manus[0].Id;
        }
      });
      this.unitService.getUnits().then((units: any) => {
        this.units = units;
        if (this.id == 0) {
          this.product.UnitId = units[0].Id;
        }
      });
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.productService.getProduct(this.id).then(product => {
          this.product = product;
          this.loadingService.stop();
        }).catch(err => {
          this.notifyService.error("Loading failed!");
        })
      };
    });
  }

  cancel() {
    this.router.navigate(['main/product-list']);
  }

  //chưa save đc
  save() {
    this.productService.saveProduct(this.product).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/product-detail", res.Id]);
      this.notifyService.success("Saving successful!");
      this.router.navigate(["main/product-list"]);
    }).catch(err => {
      this.notifyService.error("Saving failed!");
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ManufacturerService } from '../manufacturer/manufacturer.service';
import { CategoryService } from '../category/category.service';
import { UnitService } from '../unit/unit.service';
import { NotifyService } from '../services/notify.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    Id: number;
    product : any = {};
    manufacturers: any[];
    categories: any[];
    units: any[];
  constructor(
    private cookieService: CookieService,
    private productService: ProductService,
    private activatedRoute : ActivatedRoute,
    private location: Location,
    private manufacturerService: ManufacturerService,
    private categoryService: CategoryService,
    private unitService: UnitService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.productService.getProduct(this.Id).then(product=>{
                this.product = product;
            }).catch(err=>{
                alert(err);
            });
        }
    })
    
    this.manufacturerService.getManufacturers().then((manufactuers: any[])=>{
        this.manufacturers = manufactuers;
    }).catch(()=>{
    })
    this.categoryService.getCategories().then((categories:any[])=>{
        this.categories = categories;
    }).catch(()=>{
    })
    this.unitService.getUnits().then((units:any[])=>{
        this.units = units;
    }).catch(()=>{
    })
  }
  
  save(){
    this.productService.save(this.product).then(res=>{
        this.notifyService.printEditSuccess();
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}

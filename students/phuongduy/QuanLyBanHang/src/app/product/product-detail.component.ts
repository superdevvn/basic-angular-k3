import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    Id: number;
    product : any = {};
  constructor(
    private cookieService: CookieService,
    private productService: ProductService,
    private activatedRoute : ActivatedRoute,
    private location: Location
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
  }
  
  save(){
    this.productService.save(this.product).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}

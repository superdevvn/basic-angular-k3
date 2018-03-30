import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  Id: number;
  product: any={};
  routerSubcription: any;
  title:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router,
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
    this.productService.saveProduct(this.product).then(res=>{
        alert("Luu thanh cong");
        this.goBack();
    })
}

  goBack(): void{
      this.location.back();
    }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';
import { ProductsService } from './products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[];
  constructor(
    private apiService: ApiService,
    private router: Router,
    private loadingService: LoadingService,
    private notifyService: NotifyService,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.productService.getProductList().then((products:any[])=>{
      this.products = products;
    }).then(()=>{
      this.loadingService.stop();
    })
  }

  detail(product){
    this.router.navigate(['main/products-detail', product.Id]);
  }

  newProduct(product){
    this.router.navigate(['main/products-detail',0]);
  }

  delete(product) {
    this.productService.deleteProduct(product.Id).then(()=>{
      this.productService.getProductList().then((products:any[])=>{
        this.products = products;
      })
    })
  }

}

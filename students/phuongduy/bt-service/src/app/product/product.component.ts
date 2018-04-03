import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  constructor(
    private apiService: ApiService,
    private productService: ProductService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.getProducts().then((products: any[])=>{
      this.products =  products;
    }).catch(res=>{
      alert(res);
    })
  }
  newProduct() {
    this.router.navigate(['main/product-detail', 0]);
  }
  detail(product){
    this.router.navigate(['main/product-detail', product.Id]);
  }
}

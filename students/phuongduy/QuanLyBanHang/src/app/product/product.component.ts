import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';

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
    private router: Router,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.productService.getProducts().then((products: any[])=>{
      this.products =  products;
      this.loadingService.stop();
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
  delete(id: number) {
    this.notifyService.confirm("Bạn có muốn xóa không?").then(()=>{
      this.productService.deleteProduct(id).then(() => {
        this.productService.getProducts().then((products: any[]) => {
          this.products = products;
        });
      });
      this.notifyService.printDeleteSuccess();
    }).catch(()=>{
    });
  }
}

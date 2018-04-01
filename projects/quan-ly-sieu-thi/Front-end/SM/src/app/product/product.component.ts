import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  constructor(private router: Router,
    private productService: ProductService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.productService.getProducts().then((products: any[]) => {
      this.products = products;
      debugger
      console.log(products);
      this.loadingService.stop();
    }).catch(err => {
      this.notifyService.error("Undefined error!");
      this.loadingService.stop();
    });
  }

  newProduct() {
    this.router.navigate(['main/product-detail', 0]);
  }

  detail(product) {
    this.router.navigate(['main/product-detail', product.Id]);
  }

  delete(product) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.productService.deleteProduct(product.Id).then(() => {
        this.notifyService.success("Deleting successful!");
        this.productService.getProducts().then((products: any) => {
          this.products = products;
        }).catch(err => {
          this.notifyService.error("Reloading failed!");
        });
      }).catch(err => {
        this.notifyService.error(err.message);
      })
    }).catch(err => {
      this.notifyService.error("Deleting failed!");
    });
  }
}

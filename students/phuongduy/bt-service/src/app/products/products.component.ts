import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private productsService: ProductsService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.productsService.getProducts().then(res=>{
      console.log(res);
    }).catch(res=>{
      alert(res);
    })
  }
  
}

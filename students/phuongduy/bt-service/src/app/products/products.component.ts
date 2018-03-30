import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  }

}

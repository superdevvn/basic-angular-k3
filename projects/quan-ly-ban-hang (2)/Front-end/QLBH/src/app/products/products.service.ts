import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ProductsService {

  constructor(
      private apiService : ApiService
  ) { }
  
}

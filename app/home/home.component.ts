import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 
  series : Product[] = []
  service !: ProductsService;
  constructor(private productService: ProductsService) {
    this.service = productService
    this.toShow();
   }
    toShow() {
    this.series = this.service.getTopProducts();
  }
}



 import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/Product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  service !: ProductsService;
  series: Product[] =[];
  product: any;
 

  @Input() set toShow(category:string) {
    this.series = this.service.getProducts(category);
  }
  constructor(private productService: ProductsService) {
    this.service = productService
   }


  ngOnInit(): void {
    
  }

  
}

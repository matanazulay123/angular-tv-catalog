import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  toShow : string []=[]
  series!: Product

  constructor(private actRoute:ActivatedRoute, private service:ProductsService){
    //let series =actRoute.snapshot.params["series"]
    //this.toShow=service.getProducts(series)

  }


  ngOnInit(): void {
    
  }

}

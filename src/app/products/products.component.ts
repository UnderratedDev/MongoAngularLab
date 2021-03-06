import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  
  constructor(public productSrv: ProductsService) { }
  
  getProducts(): void {
    this.productSrv.getProducts()
    .then(products => this.products = products);
  }
  ngOnInit(): void { this.getProducts(); }

}

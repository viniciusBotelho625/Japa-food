import { Component, OnInit } from '@angular/core';
import { Product } from './product.module';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
}

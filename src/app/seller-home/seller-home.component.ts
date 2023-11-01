import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList: undefined | Product[];
  productMessage: undefined | string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.productList().subscribe((result) => {
      console.log(result);
      this.productList = result;
    })
  }

  deleteProduct(id: number) {
    console.log('Product id', id);
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Products is deleted';
        this.listProducts();
      }
    });
    setTimeout(() => this.productMessage = undefined, 3000);
  }

}

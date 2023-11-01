import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage: string | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  // Functionalities
  addProduct(data: Product) {
    this.productService.addProduct(data).subscribe((result) => {
      console.log('Add Product Result: ', result);
      if (result) {
        this.addProductMessage = 'Product is successfully added!';
      }
      setTimeout(() => this.addProductMessage = undefined, 3000);
    });
  }

}

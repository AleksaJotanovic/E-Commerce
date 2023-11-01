import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData: undefined | Product;
  productQuantity: number = 1;

  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(Number(productId)).subscribe((result) => {
      console.log(result);
      this.productData = result;
    });
  }

  // Functionalities
  handleQuantity(operator: string) {
    if (this.productQuantity < 20 && operator === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity < 20 && operator === 'minus') {
      this.productQuantity -= 1;
    }
  }

}

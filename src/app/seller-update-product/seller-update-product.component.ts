import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData: undefined | Product;
  updateMessage: undefined | string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log('Product query param - id: ', productId);
    productId && this.productService.getProduct(Number(productId)).subscribe((result) => {
      this.productData = result;
    });
  }

  updateProduct(product: Product) {
    if (this.productData) {
      product.id = this.productData.id;
    }
    this.productService.updateProduct(product).subscribe((result) => {
      if (result) {
        this.updateMessage = 'Product has updated!';
      }
    });
    setTimeout(() => this.updateMessage = undefined, 3000);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/data-types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: undefined | Product[];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    console.log(query);
    query && this.productService.searchProduct(query).subscribe((result) => {
      this.searchResult = result;
    });
  }

}

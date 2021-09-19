import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:ProductModel[] = []
  name:string = '';

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  filter(): void {
    if(this.name == ''){
      this.products = this.productService.getProducts();
    }
    else{
      this.products = this.productService.filterByName(this.name);
    }

  }

}

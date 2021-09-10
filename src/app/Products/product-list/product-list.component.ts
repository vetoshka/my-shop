import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductsService) { }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  products:ProductModel[] = []

  name:string = '';
  filter(){
    if(this.name == ''){
      this.products = this.productService.getProducts();
    }
    else{
      this.products = this.productService.filterByName(this.name);
    }
    
  }

}

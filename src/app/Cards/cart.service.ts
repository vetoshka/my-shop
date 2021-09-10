import { Injectable } from '@angular/core';
import { Category } from '../category';
import { ProductModel } from '../Products/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private products: ProductModel[] = [
    {name:'First', description :'Des1', price : 10 , category : Category.Products, isAvailable:true },
  ];
  getProducts(){
    return  this.products;
  }
}

import { Injectable } from '@angular/core';
import { Category } from '../category';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: ProductModel[] = [
    {name:'First', description :'Des1', price : 10 , category : Category.Products, isAvailable:true },
    {name:'Second', description :'Des2', price : 10 , category : Category.Clothes, isAvailable:false },
  ];

  getProducts(): ProductModel[] {
    return this.products;
  }

  filterByName(name:string): ProductModel[] {
    return this.products.filter(product => product.name === name);
}
}

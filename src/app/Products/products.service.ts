import { Injectable } from '@angular/core';
import { Category } from '../category';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private products: ProductModel[] = [
    {name:'First', description :'Des1', price : 10 , category : Category.Products, isAvailable:true },
    {name:'Second', description :'Des2', price : 10 , category : Category.Clothes, isAvailable:false },
  ];
  getProducts(){
    return  this.products;
  }

  filterByName(name:string): ProductModel[] {
    return this.products.filter(x=>x.name == name);
}
}

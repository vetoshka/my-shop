import { Injectable } from '@angular/core';
import { Category } from '../category';
import { ProductModel } from '../Products/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // предполагаю, что модель должна быть другой, например, дополнительно содержать количество товара
  private products: ProductModel[] = [
    {name:'First', description :'Des1', price : 10 , category : Category.Products, isAvailable:true },
  ];

  getProducts(): ProductModel[] {
    return  this.products;
  }
}

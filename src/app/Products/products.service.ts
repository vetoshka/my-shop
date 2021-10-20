import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Category } from '../models/category';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';
const products = [
  { id:1,name: 'First', description: 'Des1', price: 10, category: Category.Products, isAvailable: true },
  { id:2,name: 'Second', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
  { id:3,name: 'AA', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
  { id:4,name: 'vv', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
  { id:5,name: 'Toy', description: 'Des3', price: 5, category: Category.Toys, isAvailable: false },
];
const productsPromise = Promise.resolve(products);
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private channel = new Subject<ProductModel>();


  
  likedProducts: ProductModel[] = []
  channel$ = this.channel.asObservable();

  publishData(data: ProductModel): void {
    this.channel.next(data);
  }

  getProducts(): Promise<ProductModel[]> {
    return productsPromise;
  }

  getLikedProducts(): ProductModel[] {
    return this.likedProducts;
  }

  likeProduct(product: ProductModel): void {
    this.likedProducts.push(product);
  }
  
  dislikeProduct(product: ProductModel): void {
    this.likedProducts = this.likedProducts.filter(p => p.name != product.name);
  }
  getProductById(id:Number | string): Promise<ProductModel | undefined> {
    return this.getProducts()
      .then(product => product.find(p => p.id === +id))
      .catch(() => Promise.reject('Error in getProductById method'));
  }
}

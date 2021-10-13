import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Category } from '../models/category';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private channel = new Subject<CartModel>();

  private products: ProductModel[] = [
    { name: 'First', description: 'Des1', price: 10, category: Category.Products, isAvailable: true },
    { name: 'Second', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
    { name: 'AA', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
    { name: 'vv', description: 'Des2', price: 5, category: Category.Clothes, isAvailable: true },
    { name: 'Toy', description: 'Des3', price: 5, category: Category.Toys, isAvailable: false },
  ];

  likedProducts: ProductModel[] = []
  channel$ = this.channel.asObservable();

  publishData(data: CartModel): void {
    this.channel.next(data);
  }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }

  getLikedProducts(): ProductModel[] {
    return this.likedProducts;
  }

  filterByName(name: string): ProductModel[] {
    return this.products.filter(product => product.name === name);
  }

  likeProduct(product: ProductModel): void {
    this.likedProducts.push(product);
  }
  
  dislikeProduct(product: ProductModel): void {
    this.likedProducts = this.likedProducts.filter(p => p.name != product.name);
  }
}

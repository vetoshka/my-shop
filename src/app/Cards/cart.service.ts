import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: CartModel[] = [];

  getProducts(): CartModel[] {
    return this.cartProducts;
  }

  getProductsCount(): number {
    return this.cartProducts.reduce((sum, x) => sum + x.quantity, 0);
  }
  getProductSummary(): number {
    return this.cartProducts.reduce((sum, x) => sum + x.price * x.quantity, 0);
  }

  deleteProductFromCart(product: CartModel): void {
    this.cartProducts = this.cartProducts.filter(x => x.name != product.name);
  }
}

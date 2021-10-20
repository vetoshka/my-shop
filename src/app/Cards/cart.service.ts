import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { shopLocalStorage } from '../core/services/local-storage.service';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService{
 
  private cartProducts: CartModel[] = [];
  totalQuantity!: number;
  totalSum!: number;

  getProducts(): CartModel[] {
     let storageData = JSON.parse(shopLocalStorage.getData('cartItems')) ;
     if(storageData) this.cartProducts = storageData;
     return this.cartProducts;
  }
  addProduct(product: ProductModel, quantity: number = 1): void {
    let cardProduct = { ...product, quantity };
    this.cartProducts = [...this.cartProducts, cardProduct];
    this.updateCartData();
  }

  removeProduct(product: CartModel): void {
    this.cartProducts = this.cartProducts.filter(x => x.name != product.name);
    this.updateCartData();
  }

  increaseQuantity(product: CartModel, quantity: number = 1): void {
    this.changeQuantity(product, quantity)
  }

  decreaseQuantity(product: CartModel, quantity: number = 1): void {
    this.changeQuantity(product, -quantity)
  }

  removeAllProducts() {
    this.cartProducts = [];
    this.updateCartData();
  }

  private updateCartData(){
      this.totalQuantity = this.cartProducts.reduce((sum, x) => sum + x.quantity, 0);
      this.totalSum = this.cartProducts.reduce((sum, x) => sum + x.price * x.quantity, 0);
      console.log("add")
      shopLocalStorage.setData('cartItems', this.cartProducts)
  }
  isEmptyCart():boolean{
    return !this.cartProducts.length;
  }
  private changeQuantity(product: CartModel, quantity: number): void {
    this.cartProducts = this.cartProducts.map(p =>
      p.name === product.name
        ? {
          ...p,
          quantity: p.quantity + quantity
        }
        : p
    );
        this.updateCartData();
  }
}

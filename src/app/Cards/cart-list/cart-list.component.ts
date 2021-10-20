import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/Products/products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: CartModel[] = [];


  selectedSortOptions: string[] = [];
  isAsc: boolean = true;
  sortOptions: string[] = ['price', 'name', 'quantity']

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.products = this.cartService.getProducts();

  }
  onGoBack(): void {
    this.router.navigate(['/']);
  }
  onProcessOrder(): void{
    this.router.navigate(['/order']);
  }
  trackByName(index: number, item: ProductModel): string {
    return item.name;
  }

  getProductsCount(): number {
    return this.cartService.totalQuantity;
  }
  getProductSummary(): number {
    return this.cartService.totalSum;
  }

  onDeleteFromCart(product: CartModel): void {
    this.cartService.removeProduct(product);
    this.products = this.cartService.getProducts();
  }
  onIncrease(product: CartModel): void {
    this.cartService.increaseQuantity(product);
    this.products = this.cartService.getProducts();
  }
  onDecrease(product: CartModel): void {
    this.cartService.decreaseQuantity(product);
    this.products = this.cartService.getProducts();
  }
}

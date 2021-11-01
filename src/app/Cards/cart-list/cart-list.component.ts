import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';
import { CartObservableService } from '../cart-observable.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {


  selectedSortOptions: string[] = [];
  isAsc: boolean = true;
  sortOptions: string[] = ['price', 'name', 'quantity']
  products$!: Observable<Array<CartModel>>;
  constructor(
    private cartService: CartObservableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts():void{
    this.products$ = this.cartService.getCartProducts();
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
    this.cartService.deleteCart(product).subscribe(
      ()=>   this.getProducts()
    );
  }
  onIncrease(product: CartModel): void {
    this.cartService.increaseQuantity(product);
  }
  onDecrease(product: CartModel): void {
    this.cartService.decreaseQuantity(product);
  }
}

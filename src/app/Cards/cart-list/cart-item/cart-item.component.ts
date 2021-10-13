import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  product!: CartModel;

  @Output()
  deleteFromCart: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  

  onDeleteFromCart(): void {
    console.log(this.product)
    this.deleteFromCart.emit(this.product);
  }
  onIncrease(): void {
    this.product.quantity++;
  }
  onDecrease(): void {
    if (this.product.quantity) {
      this.product.quantity--;
    }

  }
}

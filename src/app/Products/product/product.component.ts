import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponentComponent {

  @Input()
  product!: ProductModel;
  @Output()
  addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  @Output()
  likeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  dislikeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() viewProduct = new EventEmitter<ProductModel>();

  @Output() editProduct = new EventEmitter<ProductModel>();
  activeHeart: boolean = false;

constructor(public authService:AuthService){

}

  onAddToCart(): void {
    console.log("product was bought");
    this.addToCart.emit(this.product);
  }
  onLikeProduct(): void {
    if (this.activeHeart) {
      this.dislikeProduct.emit(this.product);
    } else {
      this.likeProduct.emit(this.product);
    }
    this.activeHeart = !this.activeHeart;
  }

  onView(): void {
    this.viewProduct.emit(this.product);
  }
  onEditProduct(): void {
    this.editProduct.emit(this.product);
  }
}
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/Products/product-model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private cardService:CartService) { }

  ngOnInit(): void {
    this.products = this.cardService.getProducts();
  }

  trackByName(index: number, item: ProductModel): string {
    return item.name;
  }
}

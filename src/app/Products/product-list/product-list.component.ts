import { Component, OnInit } from '@angular/core';
import { CartModule } from 'src/app/Cards/cart.module';
import { CartService } from 'src/app/Cards/cart.service';
import { Category } from 'src/app/models/category';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = []
  name: string = '';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  filter(): void {
    if (this.name == '') {
      this.products = this.productService.getProducts();
    }
    else {
      this.products = this.productService.filterByName(this.name);
    }

  }

  onAddToCart(product: ProductModel): void {
    const cart: CartModel = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: Category.Products,
      isAvailable: product.isAvailable,
      quantity: 1
    }

    this.productService.publishData(cart);
  }

  onLikeProduct(product: ProductModel): void {
    this.productService.likeProduct(product);
    console.log(this.productService.getLikedProducts());
  }
  
  onDislikeProduct(product: ProductModel): void {
    this.productService.dislikeProduct(product);
    console.log(this.productService.getLikedProducts());
  }

}

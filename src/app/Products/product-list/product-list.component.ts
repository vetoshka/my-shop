import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Cards/cart.service';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsPromiseService } from '../products-promise.service';
import { LikedProductsService } from '../products.service';
import { CartObservableService } from 'src/app/Cards/cart-observable.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Promise<ProductModel[]>;
  name: string = '';

  constructor(private productService: ProductsPromiseService, private likedService: LikedProductsService, private cartService: CartObservableService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onView(product: ProductModel): void {
    const link = ['/products/product', product.id];
    this.router.navigate(link);
  }
  onAddToCart(product: ProductModel, quantity: number = 1): void {
    let cardProduct = { ...product, quantity };
    console.log("22")
    this.cartService.getCartProducts().subscribe(
      (items) => {
        console.log(items.includes(cardProduct))
        if (items.find(x=>x.id === product.id)) {
           this.cartService.increaseQuantity(cardProduct, 1); 
          }else { 
            this.cartService.createCart(cardProduct).subscribe(); 
          }
      }
    );

  }

  onLikeProduct(product: ProductModel): void {
    this.likedService.likeProduct(product);
    console.log(this.likedService.getLikedProducts());
  }

  onDislikeProduct(product: ProductModel): void {
    this.likedService.dislikeProduct(product);
    console.log(this.likedService.getLikedProducts());
  }

  onEditProduct(product: ProductModel): void {

    const link = ['/admin', { outlets: { admin: ['product', 'edit', product.id] } }];
    this.router.navigate(link);
  }
}

import { Component, OnInit } from '@angular/core';
import { CartModule } from 'src/app/Cards/cart.module';
import { CartService } from 'src/app/Cards/cart.service';
import { Category } from 'src/app/models/category';
import { CartModel } from 'src/app/models/cart.model';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../products.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Promise<ProductModel[]>;
  name: string = '';

  constructor(private productService: ProductsService,private cartService: CartService,private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onView(product: ProductModel): void {
    const link = ['/products/product', product.id ];
    this.router.navigate(link);
  }
  onAddToCart(product: ProductModel): void {
    let cartProduct =  this.cartService.getProducts().find(x => x.name === product.name);
    if (!cartProduct) {
      this.cartService.addProduct(product);
    } else {
      this.cartService.increaseQuantity(cartProduct,1);
    }

  }

  onLikeProduct(product: ProductModel): void {
    this.productService.likeProduct(product);
    console.log(this.productService.getLikedProducts());
  }
  
  onDislikeProduct(product: ProductModel): void {
    this.productService.dislikeProduct(product);
    console.log(this.productService.getLikedProducts());
  }

  onEditProduct(product: ProductModel): void {
    
    const link = ['/admin',{ outlets: { admin: ['product','edit',product.id] } }];
    this.router.navigate(link);
  }
}

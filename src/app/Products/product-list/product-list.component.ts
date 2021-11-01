import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductsPromiseService } from '../products-promise.service';
import { LikedProductsService } from '../products.service';
import { CartObservableService } from 'src/app/Cards/cart-observable.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx/app.state';
import { ProductState } from 'src/app/core/@ngrx/products/products.state';
import { Observable } from 'rxjs';
import * as ProductAction from 'src/app/core/@ngrx/products/products.actions';
import { selectProductsData, selectProductsError, selectProductsState } from 'src/app/core/@ngrx/products/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})



export class ProductListComponent implements OnInit {
    ;
  name: string = '';

  products$!: Observable<ReadonlyArray<ProductModel>>;
  productsError$!: Observable<Error | string | null>;


  constructor(private store: Store<AppState>, private likedService: LikedProductsService, private cartService: CartObservableService, private router: Router) { }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData);
    this.productsError$ = this.store.select(selectProductsError);
   
    this.store.dispatch(ProductAction.getProducts());
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
        if (items.find(x => x.id === product.id)) {
          this.cartService.increaseQuantity(cardProduct, 1);
        } else {
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

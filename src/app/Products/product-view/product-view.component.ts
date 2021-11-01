import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx/app.state';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx/products/products.selectors';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsPromiseService } from '../products-promise.service';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();
  constructor(
    private productService: ProductsPromiseService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
    };
    this.store.select(selectSelectedProductByUrl)
      .subscribe(observer);
  }

  onAddToCart(): void {
    this.productService.publishData(this.product);
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.back());
  }




}

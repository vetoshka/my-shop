import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, switchMap, takeUntil } from 'rxjs';
import { ProductsPromiseService } from 'src/app/Products/products-promise.service';

import * as ProductAction from './products.actions';

@Injectable()
export class ProductsEffects {



  constructor(private actions$: Actions, private productPromiseService: ProductsPromiseService) { }
  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductAction.getProducts),
      switchMap(() =>
          this.productPromiseService
            .getProducts()
            .then(products => ProductAction.getProductsSuccess({ products }))
            .catch(error => ProductAction.getProductsError({ error }))
        )
      )
      );
}

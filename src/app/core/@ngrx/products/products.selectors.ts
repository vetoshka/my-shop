import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';
import { AppState } from '../app.state';
import { ProductState } from './products.state';
import { selectRouteParams, selectRouterState } from '../router/router.selectors';

export const selectProductsState = createFeatureSelector<AppState, ProductState>('products');
export const selectProductsData = createSelector(selectProductsState, (state: ProductState) =>
    state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductState) =>
    state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductState) =>
    state.loaded);
export const selectSelectedProductByUrl = createSelector(
    selectProductsData,
    selectRouteParams,
    (products, params): ProductModel => {
        const productID = params.productID;
        if (productID && Array.isArray(products)) {
            return products.find(p => p.id === +productID);
        } else {
            return new ProductModel();
        }
    });
import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';
export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');
export const getProduct = createAction(
  '[Add/Edit Product Page (App)] GET_PRODUCT',
  props<{ productID: number }>()
);
export const createProduct = createAction(
  '[Product Form Page] CREATE_PRODUCT',
  props<{ task: ProductModel }>()
);
export const updateProduct = createAction(
  '[Product Form Page] UPDATE_PRODUCT',
  props<{ task: ProductModel }>()
);
export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ task: ProductModel }>()
);

export const getProductsSuccess = createAction(
  '[Get Tasks Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: ProductModel[] }>()
 );
 export const getProductsError = createAction(
  '[Get Tasks Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
 );
 

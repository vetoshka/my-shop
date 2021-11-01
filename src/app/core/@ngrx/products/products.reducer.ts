import { Action, createReducer, on } from '@ngrx/store';
import { initialProductState, ProductState } from './products.state';
import * as ProductActions from './products.actions';

const reducer = createReducer(
  initialProductState,
  on(ProductActions.getProducts, state => {
    console.log('GET_PRODUCTS action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(ProductActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCESS action being handled!');
    const data = [...products];
    return {
      ...state,
      data,
      loading: false,
      loaded: true
    };
  }),
  on(ProductActions.getProductsError, (state, { error }) => {
    console.log('GET_PRODUCTS_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),

  on(ProductActions.getProduct, state => {
    console.log('GET_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductActions.createProduct, state => {
    console.log('CREATE_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductActions.updateProduct, state => {
    console.log('UPDATE_PRODUCTS action being handled!');
    return { ...state };
  }),
  on(ProductActions.deleteProduct, state => {
    console.log('DELETE_PRODUCTS action being handled!');
    return { ...state };
  })
);
export function productsReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}

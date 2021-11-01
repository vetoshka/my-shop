import { RouterState } from "@angular/router";
import { ProductState } from "./products/products.state";

export interface AppState {
    products: ProductState;
    router:RouterState
   }
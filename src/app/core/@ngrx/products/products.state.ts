import { ProductModel } from "src/app/models/product.model";

export interface ProductState {
    data: ReadonlyArray<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string | null;
}
export const initialProductState: ProductState = {
    data: [
       // new ProductModel(1, "product1", "sss", 123, "Toy", true),
       // new ProductModel(2, "product2", "sss", 123, "Toy", true),
       // new ProductModel(3, "product3", "sss", 123, "Toy", true)
    ],
    loading: false,
    loaded: false,
    error: null
   
};

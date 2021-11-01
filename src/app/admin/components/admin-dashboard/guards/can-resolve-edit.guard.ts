import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsPromiseService } from 'src/app/Products/products-promise.service';

@Injectable({
  providedIn: 'root'
})
export class CanResolveEditGuard implements Resolve<ProductModel|undefined>{

  constructor(private router: Router, private productService: ProductsPromiseService) { }
   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProductModel|undefined> {
    const id = route.paramMap.get('productID')!;
     try {
      const product = await this.productService.getProduct(id);
      if (product) {
        return product;
      } else {
        this.router.navigate(['admin/']);
        return Promise.resolve(undefined);
      }
    } catch (e) {
      this.router.navigate(['admin/']);
      return Promise.resolve(undefined);
    }

  }
}



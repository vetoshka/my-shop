import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/Products/products.service';

@Injectable({
  providedIn: 'root'
})
export class CanResolveEditGuard implements Resolve<ProductModel>{

  constructor(private router: Router, private productService: ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<ProductModel> {

    const id = route.paramMap.get('productID')!;
    return this.productService.getProductById(id).then(product => {
      if (product) {
        return product;
      } else {
        this.router.navigate(['admin/']);
        return EMPTY.toPromise();
      }
    }
    ).catch(() => {
      this.router.navigate(['admin/']);
      return EMPTY.toPromise();
    });

  }
}



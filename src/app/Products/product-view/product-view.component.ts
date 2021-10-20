import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsModule } from '../products.module';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../products.service';
import { ProductModel } from 'src/app/models/product.model';
import { CartService } from 'src/app/Cards/cart.service';
import { CartModel } from 'src/app/models/cart.model';
import { Category } from 'src/app/models/category';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product!: ProductModel;
  @Output() addToCart = new EventEmitter<ProductModel>();
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.productService.getProductById(params.get('productID')!)),
        map(el => el ? el : {} as ProductModel))
      .subscribe(observer);
  }

  onAddToCart(): void {
    this.productService.publishData(this.product);
  }

  onGoBack(): void {
    this.router.navigate(['/']);
  }

}

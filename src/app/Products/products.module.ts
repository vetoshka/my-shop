import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponentComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [ProductListComponent,
    ProductComponentComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductFormComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

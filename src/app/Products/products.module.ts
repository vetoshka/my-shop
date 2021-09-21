import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponentComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent,
    ProductComponentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

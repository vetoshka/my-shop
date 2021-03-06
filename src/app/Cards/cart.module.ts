import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    SharedModule      
  ],
  exports: [CartListComponent]
})
export class CartModule { }

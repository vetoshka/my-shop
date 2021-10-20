import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { OrderGuard } from './guards/order.guard';



@NgModule({
  declarations: [
    ProcessOrderComponent,
    OrderGuard
  ],
  imports: [
    CommonModule
  ],
  exports:[OrderGuard]
})
export class OrdersModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { AdminRouterModule } from './admin-router.module';
import { ProductsModule } from '../Products/products.module';



@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRouterModule
  ],
  exports: [AdminDashboardComponent]
})
export class AdminModule { }

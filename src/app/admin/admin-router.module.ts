import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductListComponent } from '../Products/product-list/product-list.component';
import { ProductViewComponent } from '../Products/product-view/product-view.component';
import { ProductsComponent } from '../Products/products/products.component';
import { AdminGuard } from './components/admin-dashboard/guards/admin.guard';
import { ProcessOrderComponent } from '../orders/process-order/process-order.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductFormComponent } from '../Products/product-form/product-form.component';
import { CanResolveEditGuard } from './components/admin-dashboard/guards/can-resolve-edit.guard';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { ProductsModule } from '../Products/products.module';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        canActivateChild: [AdminGuard],
        children: [
          { path: 'products', component: ProductListComponent, outlet: 'admin' },
          { path: 'orders', component: ProcessOrderComponent, outlet: 'admin' },
          { path: 'product/add', component: ProductFormComponent, outlet: 'admin' },
          {
            path: 'product/edit/:productID', component: ProductFormComponent,
            canDeactivate: [CanDeactivateGuard],
            outlet: 'admin',
            resolve: {
              product: CanResolveEditGuard
            },

          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouterModule { }
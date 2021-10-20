import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin/components/admin-dashboard/guards/admin.guard';
import { CartListComponent } from './Cards/cart-list/cart-list.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CanDeactivateGuard } from './core/guards/can-deactivate.guard';
import { LoginComponent } from './layout/login/login.component';
import { OrderGuard } from './orders/guards/order.guard';
import { ProcessOrderComponent } from './orders/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'products',
    canLoad: [AuthGuard],
    loadChildren: () => import('./Products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'order',
    canActivate: [OrderGuard],
    component: ProcessOrderComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'products'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponentComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'product/:productID', component: ProductViewComponent },
          { path: '', component: ProductListComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

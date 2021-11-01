import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './Cards/cart.module';
import { ProductsModule } from './Products/products.module';
import { FirstComponent } from './first/first.component';
import { CoreModule } from './core/core.module';
import { UserComponent } from './users/user/user.component';
import { AdminModule } from './admin/admin.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/interceptors';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './core/@ngrx/root-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CartModule,
    ProductsModule,
    AdminModule,
    CoreModule,
    LayoutModule,
    AppRoutingModule,
    RootStoreModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

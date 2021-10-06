import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './Cards/cart.module';
import { ProductsModule } from './Products/products.module';
import { FirstComponent } from './first/first.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

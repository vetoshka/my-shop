import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, NavigationExtras, Route, UrlSegment, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/Cards/cart.service';
@Injectable({
    providedIn: 'root'
})
export class OrderGuard implements CanActivate {
    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(this.cartService.isEmptyCart())
        return !this.cartService.isEmptyCart();
    }

    constructor(
        private cartService: CartService,
    ) { }
}

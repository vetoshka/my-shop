import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, NavigationExtras, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate , CanLoad , CanActivateChild{
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin();
  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkLogin();
  }
  private checkLogin(): boolean | UrlTree {
    console.log("auth",this.authService.isLoggedIn)
    if (this.authService.isLoggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;

  }
}

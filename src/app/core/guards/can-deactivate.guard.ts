import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './interfaces/can-component-deactivate.interface';

@Injectable({
  providedIn: 'any'
})
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}

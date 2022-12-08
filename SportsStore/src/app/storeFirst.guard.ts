import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { StoreComponent } from './store/store.component';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.firstNavigation) return true;

    this.firstNavigation = false;

    if (route.component == StoreComponent) return true;

    this.router.navigateByUrl('/');
    return false;
  }
}

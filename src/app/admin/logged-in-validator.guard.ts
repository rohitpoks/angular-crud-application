import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessorService } from './accessor.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInValidatorGuard implements CanActivate {

  constructor(private router: Router, private accessor: AccessorService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if (!this.accessor.loggedIn) {
    this.router.navigate(['/admin/login']);
    return false;
  }
  return true;
  }
  
}

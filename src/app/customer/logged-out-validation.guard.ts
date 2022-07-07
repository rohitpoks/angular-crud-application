import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessorService } from './accessor.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutValidationGuard implements CanActivate {
  constructor(private accessor: AccessorService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.accessor.loggedIn) {
        console.log("here");
        const url = "/customer/" +  this.accessor.currentID;
        this.router.navigateByUrl(url);
        return false;
      }
    return true;
  }
  
}

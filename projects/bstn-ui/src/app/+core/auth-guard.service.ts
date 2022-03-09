import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    refCode: any;
    constructor(
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let bstnForwardUrl = window.location.href;
        localStorage.setItem('bstnForwardUrl', bstnForwardUrl);
        if ('authtoken') {
            return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: route.queryParams })
        return false;
    }
}
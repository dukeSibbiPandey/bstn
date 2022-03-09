import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionData } from 'projects/bstn-ui/src/app/+core/+services/sessiondata';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
    refCode: any;
    constructor(
        private router: Router
    ) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let bstnForwardUrl = window.location.href;
        localStorage.setItem('bstnForwardUrl', bstnForwardUrl);
        if (SessionData.AuthToken) {
            return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: route.queryParams })
        return false;
    }
}
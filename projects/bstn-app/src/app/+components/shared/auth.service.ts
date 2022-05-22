import { Injectable } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginData: any;
  constructor(private oAuthService: OAuthService) {
    //  debugger
    this.isLoginData = this.oAuthService.getIdentityClaims();
  }
}

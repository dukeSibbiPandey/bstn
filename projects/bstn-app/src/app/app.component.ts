import { Component } from '@angular/core';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './auth.config';
import { AuthService } from './+components/shared/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bstn-app';

  constructor(private oAuthService:OAuthService, public authService:AuthService){
this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.tokenValidationHandler =  new JwksValidationHandler();
   this.oAuthService.loadDiscoveryDocumentAndLogin();
   this.token();
  }

   token(){
    
    let claims:any = this.oAuthService.getIdentityClaims();    
     this.authService.isLoginData = claims;
    return claims? claims:null;
  }

 
}



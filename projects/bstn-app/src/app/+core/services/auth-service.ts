import { Injectable } from '@angular/core';
import { UserManager, User, UserManagerSettings } from 'oidc-client';
import { Constants } from '../constants/oauth';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    

    private _loginChangedSubject = new Subject<boolean>();
    public loginChanged = this._loginChangedSubject.asObservable();
    private get idpSettings() : UserManagerSettings {
      return {
        authority: Constants.idpAuthority,
        client_id: Constants.clientId,
        redirect_uri: `${Constants.clientRoot}/signin-callback`,
        scope: "openid profile companyApi",
        response_type: "code",
        post_logout_redirect_uri: `${Constants.clientRoot}/signout-callback`
      }
    }
  
    constructor( private _user: User ,private _userManager: UserManager) {
      debugger 
      this._userManager = new UserManager(this.idpSettings);
     
    }

   

    public isAuthenticated = (): Promise<boolean> => {
      return this._userManager.getUser()
       .then(user => {
         // this._user = user;
         return this.checkUser(this._user);
       })
    }
    
    private checkUser = (user : User): boolean => {
      return !!user && !user.expired;
    }
    
    public login = () => {
      return this._userManager.signinRedirect();
  }
  }
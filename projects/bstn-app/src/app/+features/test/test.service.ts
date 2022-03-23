import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor() {

    }

    logout() {
        alert('Logut trigger')

    }
    // login(login: any) {
    //     return this.httpService.Post(apiurl.ACCOUNT.LOGIN, login, null, null);
    // }
}

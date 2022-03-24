import { Injectable, Output, EventEmitter } from '@angular/core';
import { apiurl } from '../../+core/constants/api';
import { HttpService } from '../../+core/services/http.service';
@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor(private _HttpService: HttpService) {

    }

    logout() {
        alert('Logut trigger')

    }
    login(login: any) {
        return this._HttpService.Post(apiurl.ACCOUNT.LOGIN, login, null, null);
    }
}

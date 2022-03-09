import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionData } from 'projects/bstn-app/src/app/+core/services/sessiondata';
import { CommonService } from 'projects/bstn-app/src/app/+core/services/common.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private _CustomService: CommonService, private _Router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const noLoader = localStorage.getItem('isSearch');
        if (!noLoader) {
            this._CustomService.show();
        }
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': SessionData.AuthToken === null ? '' : 'Bearer ' + SessionData.AuthToken
            }
        });
        return next.handle(req).pipe(finalize(() => !noLoader ? this._CustomService.hide() : localStorage.removeItem('isSearch')));
    }
}

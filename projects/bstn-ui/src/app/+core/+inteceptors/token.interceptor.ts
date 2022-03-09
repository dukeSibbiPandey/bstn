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
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private _Router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const isSarch = localStorage.getItem('isSearch');
        req = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'aaaaaaaaaaaaaaa'
            }
        });
        return next.handle(req).pipe(finalize(() => !isSarch ? '' : localStorage.removeItem('isSearch')));
    }
}

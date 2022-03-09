import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { environment } from 'projects/bstn-ui/src/environments/environment';
@Injectable({
    providedIn: 'root'
})



export class HttpService {
    constructor(private http: HttpClient, private httpBackend: HttpBackend) { }
    public Get(url: string, params: any, headers: any): Observable<any> {
        let apiUrl = environment.BASE_URL + url
        return this.http.get<Observable<any>>(apiUrl, { 'headers': { ...headers }, 'params': { ...params } });
    }
    public Post(url: string, formData: any, params: any, headers: any): Observable<any> {
        let apiUrl = environment.BASE_URL + url
        return this.http.post<Observable<any>>(apiUrl, formData, { 'headers': { ...headers }, 'params': { ...params } });
    }
    public Put(url: string, formData: any, params: any, headers: any): Observable<any> {
        let apiUrl = environment.BASE_URL + url
        return this.http.put<Observable<any>>(apiUrl, formData, { 'headers': { ...headers }, 'params': { ...params } });
    }
    public Delete(url: string, params: any, headers: any): Observable<any> {
        let apiUrl = environment.BASE_URL + url
        return this.http.delete<Observable<any>>(apiUrl, { 'headers': { ...headers }, 'params': { ...params } });
    }

    public PostFile(url: string, formData: any, params: any, headers: any): Observable<any> {
        let apiUrl = environment.BASE_URL + url;
        const newHttpClient = new HttpClient(this.httpBackend);
        return newHttpClient.post<Observable<any>>(apiUrl, formData, { 'headers': { ...headers }, 'params': params });
    }
}

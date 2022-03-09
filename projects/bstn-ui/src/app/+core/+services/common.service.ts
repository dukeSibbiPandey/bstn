import { Injectable, NgZone } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
declare global {
    interface Window { dataLayer: any[]; }
}
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(public dialogService: DialogService) { }
    activeLoader = new Subject<boolean>();
    show() {
        this.activeLoader.next(true);
    }
    hide() {
        this.activeLoader.next(false);
        localStorage.removeItem('isSarch');
    }
    isMobile() {
        if (sessionStorage.desktop)
            return false;
        else if (localStorage.mobile)
            return true;
        var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
        for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
        return false;
    };
    getFormattedDate = (date: any) => {
        var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var day = week[date.getDay()];
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var returnDate = day + ' - ' + dd + '/' + mm + '/' + yyyy + ' ' + hours + ':' + minutes + ':' + ampm;
        return returnDate
    };
    openDialogComponent = (dialogConfig: any, dialogHeader: string, width: any, component: any) => {
        return this.dialogService.open(component, {
            data: {
                ...dialogConfig
            },
            header: dialogHeader,
            width: width
        });
    }
    dialogComponentConfig = (data: any, component: any) => {
        let dialogConfig = {
            res: data,
        };
        let dialogHeader = data.header;
        let width = data.width;
        component = component
        let ref = this.openDialogComponent(dialogConfig, dialogHeader, width, component);
        return ref.onClose;
    }
    setReturnUrl = (url: any) => {
        const defaulUrl = url || window.location.href;
        localStorage.setItem('bstnForwardUrl', defaulUrl)
    }
    getRturnUrl = (url: any) => {
        let bstnForwardUrl;
        const defaulUrl = url || '/dashboard';
        bstnForwardUrl = localStorage.getItem('bstnForwardUrl') || defaulUrl;
        localStorage.removeItem('bstnForwardUrl');
        return bstnForwardUrl
    }
    getFormatedError = (err: any) => {
        var result = err?.error?.result;
        if (result && typeof result === 'string') {
            return result;
        }
        else if (result) {
            const vals = Object.keys(result).map(key => result[key]);
            return vals.toString();
        }
        else {
            return "Error found from server. ";
        }
    }
}

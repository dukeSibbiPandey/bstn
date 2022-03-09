export class SessionData {
    static set AuthToken(value) {
        localStorage.setItem('bstnAuthToken', value === null ? '' : value);
    }
    static get AuthToken() {
        return localStorage.getItem('bstnAuthToken');
    }

    static set userInfo(value: any) {
        localStorage.setItem('bstnUserData', value === null ? '' : value);
    }
    static get userInfo() {
        let data = localStorage.getItem('bstnUserData')
        return data && JSON.parse(data) || null
    }
}

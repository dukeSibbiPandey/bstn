export const routesConfig = {
    /* AUTH */
    LOGIN: {
        routeParam: '/login-page',
        routeState: 'login-page',
    },
    /* DASHBOARD */
    DASHBOARD: {
        routeParam: '/dashboard',
        routeState: 'dashboard',
    },
    /* CLIENT */
    CLIENTS: {
        routeParam: '',
        routeState: 'client',
    },
    /* client mangage */
    CLIENT_MANAGE_OLD: {
        routeParam: '/manage-clients',
        routeState: 'manage-clients',
    },
    CLIENT_MANAGE: {
        routeParam: '/client/manage',
        routeState: 'manage',
    },
    /* client profile */
    CLIENT_PROFILE_OLD: {
        routeParam: '/client-profile',
        routeState: 'client-profile',
    },
    CLIENT_PROFILE: {
        routeParam: '/client/profile',
        routeState: 'profile',
    },
    CLIENT_PROFILE_ID_OLD: {
        routeParam: '/client-profile/:id',
        routeState: 'client-profile/:id',
    },
    CLIENT_PROFILE_ID: {
        routeParam: '/client/profile/:id',
        routeState: 'profile/:id',
    },
    /* add/edit client */
    CLIENT_ADD_OLD: {
        routeParam: '/add-new-client',
        routeState: 'add-new-client',
    },
    CLIENT_ADD: {
        routeParam: '/client/add-new-client',
        routeState: 'add-new-client',
    },
    CLIENT_EDIT_OLD: {
        routeParam: '/edit-client/:id',
        routeState: 'edit-client/:id',
    },
    CLIENT_EDIT: {
        routeParam: '/client/edit-client/:id',
        routeState: 'edit-client/:id',
    }
}
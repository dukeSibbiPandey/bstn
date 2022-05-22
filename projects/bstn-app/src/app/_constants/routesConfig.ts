export const routesConfig ={
    CLIENT_MANAGE:{
        routeParam:'/client/manage',
        routeState:'manage',
    },
    /* client profile */
    CLIENT_PROFILE:{
        routeParam:'/client/profile',
        routeState:'profile',
    },
    CLIENT_PROFILE_ID:{
        routeParam:'/client/profile/:id',
        routeState:'profile/:id',
    },
    /* add/edit client */
    CLIENT_ADD:{
        routeParam:'/client/add-new-client',
        routeState:'add-new-client',
    },
    CLIENT_EDIT:{
        routeParam:'/client/edit-client/:id',
        routeState:'edit-client/:id',
    }
}
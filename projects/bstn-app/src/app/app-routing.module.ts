import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './+components/error/error.component';
import { EmployeePageComponent } from './+components/pages/dashboard/employee-page/employee-page.component';
import { LoginPageComponent } from './+components/pages/login-page/login-page.component';
import { ManageClientsComponent } from './+components/pages/manage-clients/manage-clients.component';
import { AuthGuard } from './+components/shared/auth.guard';
import { AddNewClientComponent } from './+components/pages/add-new-client/add-new-client.component';
import { ClientProfileComponent } from './+components/pages/client-profile/client-profile/client-profile.component';
import { routesConfig } from './_constants/routesConfig';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: routesConfig['LOGIN']['routeState'], component: LoginPageComponent,
  },
  {
    path: routesConfig['DASHBOARD']['routeState'], component: EmployeePageComponent
  },
  {
    path: routesConfig['CLIENTS']['routeState'],
    loadChildren: () => import('./+features/client/client.module').then(mod => mod.ClientModule)
  },
  {
    path: routesConfig['CLIENT_MANAGE_OLD']['routeState'], component: ManageClientsComponent, canActivate: [AuthGuard]
  },
  {
    path: routesConfig['CLIENT_ADD_OLD']['routeState'], component: AddNewClientComponent
  },
  {
    path: routesConfig['CLIENT_EDIT_OLD']['routeState'], component: AddNewClientComponent
  },
  {
    path: routesConfig['CLIENT_PROFILE_ID_OLD']['routeState'], component: ClientProfileComponent
  },
  {
    path: routesConfig['CLIENT_PROFILE_OLD']['routeState'], component: ClientProfileComponent
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

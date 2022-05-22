import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent, ClientManageComponent, ClientProfileComponent, AddNewClientComponent } from './index';
import { routesConfig } from '../../_constants/routesConfig';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '', redirectTo: routesConfig['CLIENT_MANAGE']['routeState'], pathMatch: 'full'
      },
      {
        path: routesConfig['CLIENT_MANAGE']['routeState'], component: ClientManageComponent
      },
      {
        path: routesConfig['CLIENT_PROFILE']['routeState'], component: ClientProfileComponent
      },
      {
        path: routesConfig['CLIENT_PROFILE_ID']['routeState'], component: ClientProfileComponent
      },
      {
        path: routesConfig['CLIENT_ADD']['routeState'], component: AddNewClientComponent
      },
      {
        path: routesConfig['CLIENT_EDIT']['routeState'], component: AddNewClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

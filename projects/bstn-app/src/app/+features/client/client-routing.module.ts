import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ClientManageComponent } from './components/client-manage/client-manage.component';
import { routesConfig } from '../../_constants/routesConfig';
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: routesConfig['CLIENT_MANAGE']['routeState'], pathMatch: 'full' },
      { path: routesConfig['CLIENT_MANAGE']['routeState'], component: ClientManageComponent },
      { path: routesConfig['CLIENT_PROFILE']['routeState'], component: ClientProfileComponent },
      {
        path: routesConfig['CLIENT_PROFILE_ID']['routeState'], component: ClientProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

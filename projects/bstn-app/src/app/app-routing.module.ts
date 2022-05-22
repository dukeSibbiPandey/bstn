import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './+components/error/error.component';
import { EmployeePageComponent } from './+components/pages/dashboard/employee-page/employee-page.component';
import { LoginPageComponent } from './+components/pages/login-page/login-page.component';
import { ManageClientsComponent } from './+components/pages/manage-clients/manage-clients.component';
import { AuthGuard } from './+components/shared/auth.guard';
import { AddNewClientComponent } from './+components/pages/add-new-client/add-new-client.component';
import { ClientProfileComponent } from './+components/pages/client-profile/client-profile/client-profile.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login-page', component: LoginPageComponent,
  },
  {
    path: 'dashboard', component: EmployeePageComponent
  },
  {
    path: 'client',
    loadChildren: () => import('./+features/client/client.module').then(mod => mod.ClientModule)
  },
  {
    path: 'manage-clients', component: ManageClientsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-new-client', component: AddNewClientComponent
  },
  {
    path: 'edit-client/:id', component: AddNewClientComponent
  },
  {
    path: 'client-profile/:id', component: ClientProfileComponent
  },
  {
    path: 'client-profile', component: ClientProfileComponent
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

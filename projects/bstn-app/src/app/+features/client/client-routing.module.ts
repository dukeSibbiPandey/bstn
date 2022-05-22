import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './components/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ClientManageComponent } from './components/client-manage/client-manage.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: '', redirectTo: 'manage-clients', pathMatch: 'full' },
      { path: 'add-new-client', component: ClientFormComponent },
      { path: 'profile', component: ClientProfileComponent },
      {
        path: 'profile/:id', component: ClientProfileComponent
      },
      { path: 'manage-clients', component: ClientManageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

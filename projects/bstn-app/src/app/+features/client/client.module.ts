import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';

import { ClientCustomModule } from './client.custom.module';

/* Client Module  */
import { ClientComponent, ClientManageComponent, ClientProfileComponent, AdvanceFilterComponent, ClientsService, ClientRoutingModule } from './index';

/* Client Profile Components */
import { AddNewContactComponent, BowelTrackComponent, ClientAddServicesComponent, ClientPanelMenuComponent, ClientProfileActivityComponent, ClientProfileContactsComponent, ClientProfileDocumentsComponent, ClientProfileHealthPassportComponent, ClientProfileServicesComponent, ClientProfileTherapistsComponent } from './components/client-profile/index';
import { AddNewClientComponent } from './components/add-new-client/add-new-client.component';
import { AddClientBehaviorComponent } from './components/add-new-client/add-client-behavior/add-client-behavior.component';
import { AddClientContactComponent } from './components/add-new-client/add-client-contact/add-client-contact.component';

/* ADD/Edit client */


@NgModule({
  declarations: [
    ClientComponent,
    ClientManageComponent,
    ClientProfileComponent,
    ClientPanelMenuComponent,
    AdvanceFilterComponent,
    ClientProfileDocumentsComponent,
    ClientProfileTherapistsComponent,
    ClientProfileContactsComponent,
    AddNewContactComponent,
    ClientAddServicesComponent,
    ClientProfileActivityComponent,
    ClientProfileHealthPassportComponent,
    ClientProfileServicesComponent,
    BowelTrackComponent,
    AddNewClientComponent,
    AddClientBehaviorComponent,
    AddClientContactComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    NgSelectModule,
    ClientCustomModule,
    OAuthModule.forRoot(),
  ],
  providers: [ClientsService, NgSelectConfig],

})
export class ClientModule { }


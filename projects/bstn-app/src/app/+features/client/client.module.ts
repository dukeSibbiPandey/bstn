import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './components/client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientManageComponent } from './components/client-manage/client-manage.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdvanceFilterComponent } from './components/client-manage/advance-filter/advance-filter.component';
import { ClientsService } from './clientservice';
import { ClientPanelMenuComponent } from './components/client-profile/client-panel-menu/client-panel-menu.component';
import { TabViewModule } from "primeng/tabview";
import { ClientProfileDocumentsComponent } from './components/client-profile/client-profile-documents/client-profile-documents.component';
import { ClientProfileTherapistsComponent } from './components/client-profile/client-profile-therapists/client-profile-therapists.component';
import { ClientProfileContactsComponent } from './components/client-profile/client-profile-contacts/client-profile-contacts.component';
import { AddNewContactComponent } from './components/client-profile/add-new-contact/add-new-contact.component';
import { ClientAddServicesComponent } from './components/client-profile/client-add-services/client-add-services.component';
import { ClientProfileActivityComponent } from './components/client-profile/client-profile-activity/client-profile-activity.component';
import { ClientProfileHealthPassportComponent } from './components/client-profile/client-profile-health-passport/client-profile-health-passport.component';
import { ClientProfileServicesComponent } from './components/client-profile/client-profile-services/client-profile-services.component';
import { BowelTrackComponent } from './components/client-profile/bowel-track/bowel-track.component';
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';
import { AddClientBehaviorComponent } from './components/client-form/add-client-behavior/add-client-behavior.component';
import { AddClientContactComponent } from './components/client-form/add-client-contact/add-client-contact.component';
@NgModule({
  declarations: [
    ClientComponent,
    ClientFormComponent,
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
    AddClientBehaviorComponent,
    AddClientContactComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    HttpClientModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    NgSelectModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    TabViewModule,
    SidebarModule,
    OAuthModule.forRoot(),
  ],
  providers: [ClientsService, NgSelectConfig],

})
export class ClientModule { }


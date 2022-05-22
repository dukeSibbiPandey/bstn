import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { TabViewModule } from "primeng/tabview";
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';

import { ClientRoutingModule } from './client-routing.module';
/* Client Module Component */
import { ClientComponent, ClientManageComponent, ClientProfileComponent } from './index';

/* Client Profile Components */
import { AddNewContactComponent, BowelTrackComponent, ClientAddServicesComponent, ClientPanelMenuComponent, ClientProfileActivityComponent, ClientProfileContactsComponent, ClientProfileDocumentsComponent, ClientProfileHealthPassportComponent, ClientProfileServicesComponent, ClientProfileTherapistsComponent } from './components/client-profile/index';
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
    BowelTrackComponent
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


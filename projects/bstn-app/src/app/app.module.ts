
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './+components/shared/header/header.component';
import { FooterComponent } from './+components/shared/footer/footer.component';
import { LayoutComponent } from './+components/layout/layout.component';
import { LoaderComponent } from './+components/shared/loader/loader.component';
import { ErrorComponent } from './+components/error/error.component';
import { ComponentsLibModule } from 'projects/components-lib/src/lib/components-lib.module';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { ManageClientsComponent } from './+components/pages/manage-clients/manage-clients.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { ClientsService } from '../app/+components/pages/manage-clients/clientservice';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup ,FormsModule, FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvanceFilterComponent } from './+components/pages/manage-clients/advance-filter/advance-filter.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { SideBarComponent } from './+components/shared/side-bar/side-bar.component';
import { PanelMenuComponent } from './+components/pages/dashboard/panel-menu/panel-menu.component';
import {RouterModule} from '@angular/router';
import { EmployeePageComponent } from './+components/pages/dashboard/employee-page/employee-page.component';
import { TabViewModule } from 'primeng/tabview';
import { CalendarComponent } from './+components/pages/dashboard/calendar/calendar.component';
import { EmployeePageScheduleComponent } from './+components/pages/dashboard/employee-page-schedule/employee-page-schedule.component';
import { EmployeePageTrainingComponent } from './+components/pages/dashboard/employee-page-training/employee-page-training.component';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';

import { EmployeePageContactsComponent } from './+components/pages/dashboard/employee-page-contacts/employee-page-contacts.component';
import { EmployeePageLeaveComponent } from './+components/pages/dashboard/employee-page-leave/employee-page-leave.component';
import { AddNewClientComponent } from './+components/pages/add-new-client/add-new-client.component';
import {FileUploadModule} from 'primeng/fileupload';
import { ClientProfileComponent } from './+components/pages/client-profile/client-profile/client-profile.component';
import { ClientPanelMenuComponent } from './+components/pages/client-profile/client-panel-menu/client-panel-menu.component';
import { ClientProfileActivityComponent } from './+components/pages/client-profile/client-profile-activity/client-profile-activity.component';
import { ClientProfileHealthPassportComponent } from './+components/pages/client-profile/client-profile-health-passport/client-profile-health-passport.component';
import { ClientProfileServicesComponent } from './+components/pages/client-profile/client-profile-services/client-profile-services.component';
import { ClientProfileContactsComponent } from './+components/pages/client-profile/client-profile-contacts/client-profile-contacts.component';
import { ClientProfileTherapistsComponent } from './+components/pages/client-profile/client-profile-therapists/client-profile-therapists.component';
import {MenubarModule} from 'primeng/menubar';
import { ClientAddServicesComponent } from './+components/pages/client-profile/client-add-services/client-add-services.component';
import { AddNewContactComponent } from './+components/pages/client-profile/add-new-contact/add-new-contact.component';
import { AddClientBehaviorComponent } from './+components/pages/add-new-client/add-client-behavior/add-client-behavior.component';
import { SearchBarComponent } from './+components/shared/header/search-bar/search-bar.component';
import { ClientProfileDocumentsComponent } from './+components/pages/client-profile/client-profile-documents/client-profile-documents.component';
import { EmployeePageTimesheetComponent } from './+components/pages/dashboard/employee-page-timesheet/employee-page-timesheet.component';
import {InputMaskModule} from 'primeng/inputmask';
import {InputRestrictionDirective } from './+core/directives/input-restrictions';
import {DigitOnlyDirective} from './+core/directives/digit-only.directive';
import { EmployeePageShiftsComponent } from './+components/pages/dashboard/employee-page-shifts/employee-page-shifts.component';
import { AddClientContactComponent } from './+components/pages/add-new-client/add-client-contact/add-client-contact.component';
import { BowelTrackingComponent } from './+components/pages/dashboard/bowel-tracking/bowel-tracking.component';
import { BowelTrackComponent } from './+components/pages/client-profile/bowel-track/bowel-track.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoaderComponent,
    ErrorComponent,
    ManageClientsComponent,
    AdvanceFilterComponent,
    SideBarComponent,
    CalendarComponent,
    PanelMenuComponent,
    EmployeePageScheduleComponent,
    EmployeePageTrainingComponent,
    EmployeePageComponent,
    EmployeePageContactsComponent,
    EmployeePageLeaveComponent,
    AddNewClientComponent,
    ClientProfileComponent,
    ClientPanelMenuComponent,
    ClientProfileActivityComponent,
    ClientProfileHealthPassportComponent,
    ClientProfileServicesComponent,
    ClientProfileContactsComponent,
    ClientProfileTherapistsComponent,
    ClientAddServicesComponent,
    AddNewContactComponent,
    AddClientBehaviorComponent,
    SearchBarComponent,
    ClientProfileDocumentsComponent,
    EmployeePageTimesheetComponent,
    InputRestrictionDirective,
    DigitOnlyDirective,
    EmployeePageShiftsComponent,
    AddClientContactComponent,
    BowelTrackingComponent,
    BowelTrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsLibModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		HttpClientModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,
   ReactiveFormsModule,
   FileUploadModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsLibModule,
    NgSelectModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
    TabViewModule,
    SidebarModule,
    SlideMenuModule,
    MenubarModule,
    InputMaskModule,    
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component: EmployeePageComponent }])
  ],
  providers: [ClientsService,NgSelectConfig],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

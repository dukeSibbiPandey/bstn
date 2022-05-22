import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientManageComponent } from './components/client-manage/client-manage.component';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { AdvanceFilterComponent } from './components/client-manage/advance-filter/advance-filter.component';
import { ClientsService } from './components/client-manage/clientservice';
@NgModule({
  declarations: [
    ClientComponent,
    ClientFormComponent,
    ClientManageComponent,
    AdvanceFilterComponent,
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
    OAuthModule.forRoot(),
  ],
  providers: [ClientsService, NgSelectConfig],

})
export class ClientModule { }


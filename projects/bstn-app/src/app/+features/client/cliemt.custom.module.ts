import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from "primeng/tabview";
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, TableModule, CalendarModule, DialogModule, MultiSelectModule, ContextMenuModule, ToastModule, InputTextModule, ProgressBarModule, DropdownModule, TabViewModule, SliderModule, SidebarModule
  ],
  exports: [CommonModule, TableModule, CalendarModule, DialogModule, MultiSelectModule, ContextMenuModule, ToastModule, InputTextModule, ProgressBarModule, DropdownModule, TabViewModule, SliderModule, SidebarModule]
})
export class ClientCustomModule { }

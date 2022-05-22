import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './components/controls/buttons/buttons.component';
import { GeneralComponent } from './components/controls/general/general.component';
import { IconsComponent } from './components/controls/icons/icons.component';
import { ModalsAndAlertsComponent } from './components/controls/modals-and-alerts/modals-and-alerts.component';
import { NavbarAndTabsComponent } from './components/controls/navbar-and-tabs/navbar-and-tabs.component';
import { RibbonsComponent } from './components/controls/ribbons/ribbons.component';
import { SlidersComponent } from './components/controls/sliders/sliders.component';
import { TablesComponent } from './components/controls/tables/tables.component';
import { TimelineComponent } from './components/controls/timeline/timeline.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'color-palette', pathMatch: 'full' },
  {
    path:'color-palette', component:GeneralComponent
  },
  {
    path:'icons', component:IconsComponent
  },
  {
    path:'buttons', component:ButtonsComponent
  },
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'tables', component:TablesComponent
  },
  {
    path:'sliders', component:SlidersComponent
  },
  {
    path:'modals', component:ModalsAndAlertsComponent
  },
  {
    path:'navbar', component:NavbarAndTabsComponent
  },
  {
    path:'timeline', component:TimelineComponent
  },
  {
    path:'ribbons', component:RibbonsComponent
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

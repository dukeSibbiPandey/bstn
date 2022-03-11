import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsLibModule } from 'components-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {PasswordModule} from 'primeng/password';
import { AccordionComponent } from './components/controls/accordion/accordion.component';
import { TabsComponent } from './components/controls/tabs/tabs.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MenuDetailsComponent,
    LayoutComponent,
    AccordionComponent,
    TabsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsLibModule,
    ButtonModule,
    SidebarModule,
    PasswordModule
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }

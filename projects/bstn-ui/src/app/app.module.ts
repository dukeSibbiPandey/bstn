import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BstnThemeModule } from 'bstn-theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BstnThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

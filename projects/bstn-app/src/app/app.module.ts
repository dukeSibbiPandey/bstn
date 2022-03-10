import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './+components/shared/header/header.component';
import { FooterComponent } from './+components/shared/footer/footer.component';
import { LayoutComponent } from './+components/layout/layout.component';
import { LoaderComponent } from './+components/shared/loader/loader.component';
import { ErrorComponent } from './+components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

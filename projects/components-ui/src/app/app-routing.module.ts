import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/controls/accordion/accordion.component';
import { TabsComponent } from './components/controls/tabs/tabs.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'accordion', pathMatch: 'full' },
  {
    path:'accordion', component:AccordionComponent
  },
  {
    path:'tabs', component:TabsComponent
  },
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

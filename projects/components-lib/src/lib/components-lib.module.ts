import { NgModule } from '@angular/core';
import { BstnAtomsModule } from './bstn-atoms/bstn-atoms.module';
import { ComponentsLibComponent } from './components-lib.component';
import { LoaderComponent } from './bstn-loader/loader.component';

@NgModule({
  declarations: [
    ComponentsLibComponent,
    LoaderComponent,
   
  ],
  imports: [
    BstnAtomsModule
  ],
  exports: [
    ComponentsLibComponent, LoaderComponent, BstnAtomsModule
  ]
})
export class ComponentsLibModule { }

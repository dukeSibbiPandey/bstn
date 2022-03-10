import { NgModule } from '@angular/core';
import { BstnAtomsModule } from './bstn-atoms/bstn-atoms.module';
import { ComponentsLibComponent } from './components-lib.component';
import { LoaderComponent } from './bstn-loader/loader.component';
import { InputRestrictionsDirective } from './bstnDirectives/input-restrictions.directive';
@NgModule({
  declarations: [
    ComponentsLibComponent,
    LoaderComponent,
    InputRestrictionsDirective
  ],
  imports: [
    BstnAtomsModule
  ],
  exports: [
    ComponentsLibComponent, LoaderComponent, BstnAtomsModule
  ]
})
export class ComponentsLibModule { }

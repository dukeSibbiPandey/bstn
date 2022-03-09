import { NgModule } from '@angular/core';
import { AtomModule } from './atom/atom.module';
import { BstnComponentsUiComponent } from './bstn-components-ui.component';

@NgModule({
  declarations: [
    BstnComponentsUiComponent
  ],
  imports: [
    AtomModule
  ],
  exports: [
    BstnComponentsUiComponent
  ]
})
export class BstnComponentsUiModule { }

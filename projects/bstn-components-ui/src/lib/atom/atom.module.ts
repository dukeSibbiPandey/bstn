import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomComponent } from './atom.component';
import { AtomInputComponent } from './atom-input/atom-input.component';
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomTestComponent } from './atom-test/atom-test.component';
@NgModule({
  declarations: [
    AtomComponent,
    AtomInputComponent,
    AtomButtonComponent,
    AtomTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AtomComponent,
    AtomInputComponent,
    AtomButtonComponent,
    AtomTestComponent
  ]
})
export class AtomModule { }

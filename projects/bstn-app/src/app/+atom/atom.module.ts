import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomInputWitnIconComponent } from './atom-input-witn-icon/atom-input-witn-icon.component';
import { AtomInputComponent } from './atom-input/atom-input.component';
import { AtomButtonComponent } from './atom-button/atom-button.component';



@NgModule({
  declarations: [
    AtomInputWitnIconComponent,
    AtomInputComponent,
    AtomButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AtomModule { }

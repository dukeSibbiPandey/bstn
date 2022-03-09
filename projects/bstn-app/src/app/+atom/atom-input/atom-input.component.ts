import { Component, Input } from '@angular/core';
import '@cds/core/input/register.js';
@Component({
  selector: 'atom-input',
  templateUrl: './atom-input.component.html',
  styleUrls: ['./atom-input.component.scss']
})
export class AtomInputComponent {

  @Input()
  inputType: string = "text";

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'input'

  constructor() { }

  ngOnInit() {
  }

}


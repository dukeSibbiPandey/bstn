import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss']
})
export class AtomButtonComponent {

  @Input()
  buttonLabel: string = 'Default Button Label';

  @Input()
  buttonClass: string = 'btn btn-default';

  @Input()
  buttonType: string = 'submit';

  @Input()
  buttonDisabled: boolean = false;
}

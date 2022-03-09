import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bstn-theme',
  template: `<div class="container"><button class="btn btn-primary">Button</button></div>`,
  styles: [
  ]
})
export class BstnThemeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

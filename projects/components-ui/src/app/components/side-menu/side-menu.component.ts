
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }
  `]
})
export class SideMenuComponent { 
  menuItem:any=[
    {
      name:'',
      link:''
    }
  ]
  visibleSidebar1:boolean=false;

  visibleSidebar2:boolean=false;

  visibleSidebar3:boolean=false;

  visibleSidebar4:boolean=false;

  visibleSidebar5:boolean=false;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }
}


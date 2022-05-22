import { Component, OnInit } from '@angular/core';
import {AddService } from '../../../../+components/_models/addService'
@Component({
  selector: 'app-client-profile-services',
  templateUrl: './client-profile-services.component.html',
  styleUrls: ['./client-profile-services.component.scss']
})
export class ClientProfileServicesComponent implements OnInit {
  displayPosition: boolean;
  ClientProfileIDForService:0;
  selectedItems: AddService;
  position:string;
  constructor() { }

  ngOnInit(): void {
    this.position="right"
  }

  cancelDetails (){
    this.displayPosition = false;
   }

  openAddServicePopup(){
    this.displayPosition = true;
   }

   saveService(){
     debugger;
     const searchParam=
     {
      
       'Id':this.selectedItems.clientRatePerUnit,
     }
   }

}

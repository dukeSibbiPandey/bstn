import { Component, OnInit } from '@angular/core';
import { AddNewContact } from 'projects/bstn-app/src/app/_models/client.models';
@Component({
  selector: 'app-client-profile-contacts',
  templateUrl: './client-profile-contacts.component.html',
  styleUrls: ['./client-profile-contacts.component.scss']
})
export class ClientProfileContactsComponent implements OnInit {
  displayPosition1: boolean;
  selectedItems: AddNewContact;
  position: string;
  constructor() { }

  ngOnInit(): void {
    this.position = "right"
  }

  cancelDetails() {
    this.displayPosition1 = false;
  }

  openAddContactPopup() {
    debugger
    this.displayPosition1 = true;
  }

  saveContact() {

  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'projects/bstn-app/src/app/+features/client/clientservice';
@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit {
  @Input() selectedItems: any;

  @Input() showActions = true;


  Contactsubmitted: any;
  cityList = this.clientsService.cityList;
  stateList = this.clientsService.stateList;
  zipCodeList = this.clientsService.zipCodeList;
  constructor(public clientsService: ClientsService, private router: Router,) { }

  ngOnInit(): void {
    this.selectedItems = this.clientsService.addNewContact;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from 'projects/bstn-app/src/app/+features/client/clientservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client-behavior',
  templateUrl: './add-client-behavior.component.html',
  styleUrls: ['./add-client-behavior.component.scss']
})
export class AddClientBehaviorComponent implements OnInit {
  @Input() selectedItems1: any;
  @Input() showActions = true;
  unitTypes = this.clientsService.unitType;
  payerAgencys = this.clientsService.payerAgency;
  serviceTypes = this.clientsService.serviceType;
  DayList: any;
  MonthList: any;
  YearList: any;
  //serviceTypes: any;
  constructor(public clientsService: ClientsService, private router: Router,) { }

  ngOnInit(): void {
    this.DayList = this.clientsService.DayList;
    this.MonthList = this.clientsService.MonthList;
    this.YearList = this.clientsService.YearList;
    this.selectedItems1 = this.clientsService.addBehavior;







  }

  ValidateBehaviour(element: any) {
    if (element == 1) {
      document.getElementById("idbefaviourClientRate").innerText = '';
      if (this.selectedItems1.clientRatePerUnit == undefined) {

        document.getElementById("idbefaviourClientRate").innerText = 'ClientRate is required';
      }
      else {
        document.getElementById("idbefaviourClientRate").innerText = '';
      }
    }

    if (element == 2) {
      document.getElementById("idbehavunitAproved").innerText = '';
      if (this.selectedItems1.unitApproved == undefined) {

        document.getElementById("idbehavunitAproved").innerText = 'Unit Approved is required';
      }
      else {
        document.getElementById("idbehavunitAproved").innerText = '';
      }
    }
    if (element == 3) {
      document.getElementById("idbehafundCode").innerText = '';
      if (this.selectedItems1.fundCode == undefined) {

        document.getElementById("idbehafundCode").innerText = 'Fund Code is required';
      }
      else {
        document.getElementById("idbehafundCode").innerText = '';
      }
    }
  }




}

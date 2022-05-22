import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'projects/bstn-app/src/app/+features/client/services/clientservice';
@Component({
  selector: 'app-client-add-services',
  templateUrl: './client-add-services.component.html',
  styleUrls: ['./client-add-services.component.scss']
})
export class ClientAddServicesComponent implements OnInit {
  @Input() selectedItems: any;

  @Input() showActions = true;
  @Input() billingtype: any;


  constructor(public clientsService: ClientsService, private router: Router,) { }

  billingTypes = this.clientsService.billingTypes;
  serviceTypes = this.clientsService.serviceType;
  unitTypes = this.clientsService.unitType;
  payerAgencys = this.clientsService.payerAgency;
  serviceTypesIsixt: boolean;
  DayList: any;
  MonthList: any;
  YearList: any;
  showInvalidServiceApprovalDate:boolean;
  showInvalidServiceExpierDate:boolean;
  ngOnInit(): void {
    this.DayList = this.clientsService.DayList;
    this.MonthList = this.clientsService.MonthList;
    this.YearList = this.clientsService.YearList;
    this.selectedItems = this.clientsService.addServiceData;





  }
  
  Validate($event: any, element: any) {
    if (element == 1) {
      document.getElementById("Billing").innerText = '';
      if ($event.value.label == undefined) {

        document.getElementById("Billing").innerText = 'Billing Type is required';
      }
      else {
        document.getElementById("Billing").innerText = '';
      }
    }
    if (element == 2) {
      document.getElementById("idClientRate").innerText = '';
      if (this.selectedItems.clientRatePerUnit == undefined) {

        document.getElementById("idClientRate").innerText = 'ClientRate is required';
      }
      else {
        document.getElementById("idClientRate").innerText = '';
      }
    }

    if (element == 3) {
      document.getElementById("idunitAproved").innerText = '';
      if (this.selectedItems.unitApproved == undefined) {

        document.getElementById("idunitAproved").innerText = 'Unit Approved is required';
      }
      else {
        document.getElementById("idunitAproved").innerText = '';
      }
    }
    if (element == 4) {
      document.getElementById("idfundCode").innerText = '';
      if (this.selectedItems.fundCode == undefined) {

        document.getElementById("idfundCode").innerText = 'Fund Code is required';
      }
      else {
        document.getElementById("idfundCode").innerText = '';
      }
    }
    if (element == 5) {
      document.getElementById("idpayeragency").innerText = '';
      if (this.selectedItems.payerAgency == undefined) {

        document.getElementById("idpayeragency").innerText = 'Payer Agency is required';
      }
      else {
        document.getElementById("idpayeragency").innerText = '';
      }
    }

  }

 
  serviceTypeChange(data: any) {
    document.getElementById("idservicetype").innerText='';
    if(data.value.label==undefined)
    {
      
      document.getElementById("idservicetype").innerText='Service Type is required';
    }
    else
    {
      document.getElementById("idservicetype").innerText='';
    }
    // if (this.clientsService.serviceTypes.length > 0) {
    //   for (var i = 0; i < this.clientsService.serviceTypes.length; i++) {
    //     if (data.value.value == this.clientsService.serviceTypes[i].clientServType) {
    //       this.serviceTypesIsixt = true;
    //       break;
    //     }
    //     else {
    //       this.serviceTypesIsixt = false
    //     }
    //   }
    // }
  }
serviceReqDate:any;
  serviceRequestedDate(data: any,Type:any){
    if (Type=='Day') {
      document.getElementById("serviceRequesteD").innerText='';
    }
    if (Type=='Month') {
      document.getElementById("serviceRequesteM").innerText='';
    }
    if (Type=='Year') {
      document.getElementById("serviceRequesteY").innerText='';
    }
    
if(this.selectedItems.serviceRequestedDay.code!="" && this.selectedItems.serviceRequestedMonth.code!="" &&  this.selectedItems.serviceRequestedYear.code!="")
{
  this.serviceReqDate = new Date(this.selectedItems.serviceRequestedMonth.code + '/' + this.selectedItems.serviceRequestedDay.code + '/' + this.selectedItems.serviceRequestedYear.code)
}
  }
serviceApprDate:any;
  serviceApprovalDate(data: any,Type:any){
    if (Type=='Day') {
      document.getElementById("serviceApproveD").innerText='';
    }
    if (Type=='Month') {
      document.getElementById("serviceApproveM").innerText='';
    }
    if (Type=='Year') {
      document.getElementById("serviceApproveY").innerText='';
    }
    if(this.selectedItems.serviceApproveDay.code!="" && this.selectedItems.serviceApproveMonth.code!="" &&  this.selectedItems.serviceApproveYear.code!="")
    {
      this.serviceApprDate = new Date(this.selectedItems.serviceApproveMonth.code + '/' + this.selectedItems.serviceApproveDay.code + '/' + this.selectedItems.serviceApproveYear.code)
   if(this.serviceReqDate>  this.serviceApprDate)
   {
    this.showInvalidServiceApprovalDate=true;
   }
   else{
    this.showInvalidServiceApprovalDate=false;
   }
    }

  }
  serviceExpDate:any;
  serviceExpirationDay(data: any,Type:any){

    if (Type=='Day') {
      document.getElementById("serviceExpireD").innerText='';
    }
    if (Type=='Month') {
      document.getElementById("serviceExpireM").innerText='';
    }
    if (Type=='Year') {
      document.getElementById("serviceExpireY").innerText='';
    }
    if(this.selectedItems.serviceExpirationDay.code!="" && this.selectedItems.serviceExpirationMonth.code!="" &&  this.selectedItems.serviceExpirationYear.code!="")
  {
    this.serviceApprDate = new Date(this.selectedItems.serviceExpirationMonth.code + '/' + this.selectedItems.serviceExpirationDay.code + '/' + this.selectedItems.serviceExpirationYear.code)
    if(this.serviceApprDate>  this.serviceExpDate)
    {
     this.showInvalidServiceExpierDate=true;
    }
    else{
     this.showInvalidServiceExpierDate=false;
    }
 
  }
  }
}

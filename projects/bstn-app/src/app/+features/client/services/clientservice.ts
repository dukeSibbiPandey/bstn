import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'projects/bstn-app/src/app/+components/_models/clients';
import { ClientFilters, AddNewContact, AddNewContactNew, AddBehavior, AddServiceData } from 'projects/bstn-app/src/app/+features/client/models/client.models';
import * as constanits from 'projects/bstn-app/src/app/_constants/client';
@Injectable()
export class ClientsService {
  constructor(private http: HttpClient) { }

  getCustomersMedium() {
    return this.http.get<any>('../../../../assets/customers-large.json')
      .toPromise()
      .then(res => <Customer[]>res.data)
      .then(data => { return data; });
  }

  clientFilter: Array<ClientFilters> = [];
  addServices: Array<AddServiceData> = [];
  filterData: ClientFilters = {};
  addServiceData: AddServiceData = {};
  addNewContact: AddNewContact = {};
  addNewContactNew: AddNewContactNew = {};
  addBehavior: AddBehavior = {};
  addServicesData: Array<AddBehavior> = [];
  addContactData: Array<AddNewContact> = [];
  serviceTypes: any;
  ContactId: number;
  ClientProfileID: number;
  clientType = constanits.clientType;
  serviceType = constanits.serviceType;
  cityList = constanits.cityList;
  stateList = constanits.stateList;
  zipCodeList = constanits.zipCodeList;
  billingTypes = constanits.billingTypes;
  unitType = constanits.unitType;
  payerAgency = constanits.payerAgency;
  DayList = constanits.DayList;
  MonthList = constanits.MonthList;
  YearList = constanits.YearList;
  contactTypelst = constanits.contactTypelst;
}
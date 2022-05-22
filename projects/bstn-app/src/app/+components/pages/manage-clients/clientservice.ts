import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../_models/clients';
import { ClientFilters } from '../manage-clients/clients';
import { AddService } from '../../_models/addService';
import { AddServiceData } from '../client-profile/add-service';
import { AddNewContact, AddNewContactNew } from '../client-profile/addnewcontact';
import { AddBehavior } from '../client-profile/addbehavior';
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
  addContactData:Array<AddNewContact>=[];
  serviceTypes: any;
  ContactId:number;
  ClientProfileID:number;
  clientType = [

    { value: "1", label: "Clinical" },
    { value: "2", label: "Both" },
    { value: "3", label: "Residential" }]

  serviceType = [

    { value: "1", label: "Behavior Analyst" },
    { value: "2", label: "Behavior Specialist" },
    { value: "3", label: "Supported Living" },
    { value: "4", label: "Day Service" },
    // { value: "5", label: "Personal Assistance" },
    //  {value:"6",label:"Nursing Services"},
    //  {value:"7",label:"Transportation Services"},
    //  {value:"8",label:"Medical Residential"}, 
    //  {value:"9",label:"Hospital Sitter"},
    //  {value:"10",label:"Supported Employment"},
    //  {value:"11",label:"PA-Self Determination"},{value:"12",label:"MR Housing"}

  ]


  cityList = [

    { value: "1", label: "Test" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }]

  stateList = [{ value: 'TN', label: 'TN' },
  { value: 'CA', label: 'CA' },
  { value: 'NY', label: 'NY' },
  { value: 'OR', label: 'OR' },
  { value: 'WA', label: 'WA' },
  { value: 'TX', label: 'TX' }]

  zipCodeList = [

    { value: "1", label: "32424" },
    { value: "2", label: "43434" },
    { value: "3", label: "43434" }]



  billingTypes = [

    { value: "1", label: "Regular" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }]



  unitType = [

    { value: "1", label: "Test" },
    { value: "2", label: "Normal" },
    { value: "3", label: "Test" }]

  payerAgency = [

    { value: "1", label: "Regional Office" },
    { value: "2", label: "Community Service Network" },
    { value: "3", label: "Private Payee" }]

  DayList = [
    { name: '01', code: '01' },
    { name: '02', code: '02' },
    { name: '03', code: '03' },
    { name: '04', code: '04' },
    { name: '05', code: '05' },
    { name: '06', code: '06' },
    { name: '07', code: '07' },
    { name: '08', code: '08' },
    { name: '09', code: '09' },
    { name: '10', code: '10' },
    { name: '11', code: '11' },
    { name: '12', code: '12' },
    { name: '13', code: '13' },
    { name: '14', code: '14' },
    { name: '15', code: '15' },
    { name: '16', code: '16' },
    { name: '17', code: '17' },
    { name: '18', code: '18' },
    { name: '19', code: '19' },
    { name: '20', code: '20' },
    { name: '21', code: '21' },
    { name: '22', code: '22' },
    { name: '23', code: '23' },
    { name: '24', code: '24' },
    { name: '25', code: '25' },
    { name: '26', code: '26' },
    { name: '27', code: '27' },
    { name: '28', code: '28' },
    { name: '29', code: '29' },
    { name: '30', code: '30' },
    { name: '31', code: '31' },
  ];

  MonthList = [
    { name: '01', code: '01' },
    { name: '02', code: '02' },
    { name: '03', code: '03' },
    { name: '04', code: '04' },
    { name: '05', code: '05' },
    { name: '06', code: '06' },
    { name: '07', code: '07' },
    { name: '08', code: '08' },
    { name: '09', code: '09' },
    { name: '10', code: '10' },
    { name: '11', code: '11' },
    { name: '12', code: '12' },

  ];

  YearList = [
    { name: '1950', code: '1950' },
    { name: '1951', code: '1951' },
    { name: '1952', code: '1952' },
    { name: '1953', code: '1953' },
    { name: '1954', code: '1954' },
    { name: '1955', code: '1955' },
    { name: '1956', code: '1956' },
    { name: '1957', code: '1957' },
    { name: '1958', code: '1958' },
    { name: '1959', code: '1959' },
    { name: '1960', code: '1960' },
    { name: '1961', code: '1961' },
    { name: '1962', code: '1962' },
    { name: '1963', code: '1963' },
    { name: '1964', code: '1964' },
    { name: '1965', code: '1965' },
    { name: '1966', code: '1966' },
    { name: '1967', code: '1967' },
    { name: '1968', code: '1968' },
    { name: '1969', code: '1969' },
    { name: '1970', code: '1970' },
    { name: '1971', code: '1971' },
    { name: '1972', code: '1972' },
    { name: '1973', code: '1973' },
    { name: '1974', code: '1974' },
    { name: '1975', code: '1975' },
    { name: '1976', code: '1976' },
    { name: '1977', code: '1977' },
    { name: '1978', code: '1978' },
    { name: '1979', code: '1979' },
    { name: '1980', code: '1980' },
    { name: '1981', code: '1981' },
    { name: '1982', code: '1982' },
    { name: '1983', code: '1983' },
    { name: '1984', code: '1984' },
    { name: '1985', code: '1985' },
    { name: '1986', code: '1986' },
    { name: '1987', code: '1987' },
    { name: '1988', code: '1988' },
    { name: '1989', code: '1989' },
    { name: '1990', code: '1990' },
    { name: '1991', code: '1991' },
    { name: '1992', code: '1992' },
    { name: '1993', code: '1993' },
    { name: '1994', code: '1994' },
    { name: '1995', code: '1995' },
    { name: '1996', code: '1996' },
    { name: '1997', code: '1997' },
    { name: '1998', code: '1998' },
    { name: '1999', code: '1999' },
    { name: '2000', code: '2000' },
    { name: '2001', code: '2001' },
    { name: '2002', code: '2002' },
    { name: '2003', code: '2003' },
    { name: '2004', code: '2004' },
    { name: '2005', code: '2005' },
    { name: '2006', code: '2006' },
    { name: '2007', code: '2007' },
    { name: '2008', code: '2008' },
    { name: '2009', code: '2009' },
    { name: '2010', code: '2010' },
    { name: '2011', code: '2011' },
    { name: '2012', code: '2012' },
    { name: '2013', code: '2013' },
    { name: '2014', code: '2014' },
    { name: '2015', code: '2015' },
    { name: '2016', code: '2016' },
    { name: '2017', code: '2017' },
    { name: '2018', code: '2018' },
    { name: '2019', code: '2019' },
    { name: '2020', code: '2020' },
    { name: '2021', code: '2021' },
    { name: '2022', code: '2022' },
  ];

  contactTypelst = [
    { name: 'Conservator', code: '1' },
    { name: 'Independent Support Coordinator', code: '2' },
    { name: 'Advocate', code: '3' },
    { name: 'Family Member', code: '4' },
    { name: 'Primary Care Physician', code: '5' },
    { name: 'Secondary Care Physician', code: '6' },
    { name: 'Psychiatrist', code: '7' },
    { name: 'Nurse', code: '8' },
    { name: 'Dentist', code: '9' },
    { name: 'Other Specialist', code: '10' },
    { name: 'Behavior Analyst', code: '11' },
    { name: 'BSTN Manager', code: '12' },
    { name: 'Residential Agency', code: '13' },
    { name: 'Pharmacy', code: '14' },
    { name: 'Outcome Manager', code: '15' },


  ];
}
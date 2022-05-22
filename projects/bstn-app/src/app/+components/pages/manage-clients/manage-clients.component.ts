import { Component, OnInit, Input } from '@angular/core';
import { LazyLoadEvent, MessageService, SelectItem } from 'primeng/api';
import { HttpService } from 'projects/bstn-app/src/app/+core/services/http.service';
import { Router } from '@angular/router';

import { ClientsService } from './clientservice';
import { AuthService } from './../../shared/auth.service';

import { Customer } from 'projects/components-ui/src/app/components/controls/client-table/customer'

import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver'
import { ClientFilters } from '../manage-clients/clients'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-manage-clients',
  templateUrl: './manage-clients.component.html',
  styleUrls: ['./manage-clients.component.scss']
})
export class ManageClientsComponent implements OnInit {
  displayPosition: boolean;
  customers: any[];
  selectedCustomer: Customer[];
  dialogVisible: boolean;

  scrollableCols: any[];
showReset:boolean;
  isLoad = true;

  frozenCols: any[];

  unlockedCustomers: any[];

  lockedCustomers: any[];
  searchParam = {
    'page': '0',
    'pageSize': '20',
    'Status': '',
    'FirstName': '',
    'LastName': '',
    'Email': '',
    'Age': '',
    'AssignedPhoneNum': '',
    'ClientPhoneNum': '',
    'City': '',
    'State': '',
    'Zip': '',
    'ClientType': '',
    'ServiceType': '',
    'ResidentialProvider': '',

  }

  cols: any[];

  cols1: any[];
  exportColumns;
  _selectedColumns: any[];
  selectedItems: ClientFilters;

  balanceFrozen: boolean = false;
  selectedStatus: any;
  rowGroupMetadata: any;
  customerStatus: SelectItem[];
  NoData = false;
  position: string;
  exportType: string;
  loader = document.getElementById('loader-div');
  constructor(private route: Router, private clientsService: ClientsService, private _httpService: HttpService, private authService:AuthService) { }

  ngOnInit() {
    this.searchParam.Status = 'true';
    this.GetClientDetailList();
    this.position = "right"
    this.frozenCols = [{ field: 'name', header: 'Name' }];





    this.customerStatus = [
      { value: "All", label: "All" },
      { value: "Active", label: "Active" },
      { value: "InActive", label: "InActive" }]


    this.cols = [

      { field: 'age', header: 'Age' },
      { field: 'clientType', header: 'Client Type' },
      { field: 'clientServicesType', header: 'Service Type' },
      { field: 'residentialProvider', header: 'Residential Provider' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'zip', header: 'Zip' },

      { field: 'secondaryPhone', header: 'Assigned Phone Number' },
      { field: 'primaryPhone', header: 'Clients Phone Number' },
      { field: 'email', header: 'Email' },

    ];
    this._selectedColumns = this.cols;
    this.cols1 = [
      { field: 'id', header: 'ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'age', header: 'Age' },
      { field: 'clientType', header: 'Client Type' },
      { field: 'clientServicesType', header: 'Service Type' },
      { field: 'residentialProvider', header: 'Residential Provider' },
      { field: 'city', header: 'City' },
      { field: 'state', header: 'State' },
      { field: 'zip', header: 'Zip' },
      { field: 'secondaryPhone', header: 'Assigned Phone Number' },
      { field: 'primaryPhone', header: 'Clients Phone Number' },
      { field: 'email', header: 'Email' },
      // { field: 'status', header: 'Status' },
    ];



    this.exportColumns = this.cols1.map(col => ({
      title: col.header,
      dataKey: col.field
    }));

  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {

    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }







  exportPdf() {

    const doc = new jsPDF('p', 'pt');
    doc['autoTable'](this.exportColumns, this.customers);

    doc.save("products.pdf");
  }

  exportExcel() {

    const worksheet = XLSX.utils.json_to_sheet(this.customers); // Sale Data
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "customers");

  }
  saveAsExcelFile(buffer: any, fileName: string): void {

    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );

  }


  exportCSV() {

    const worksheet = XLSX.utils.json_to_sheet(this.customers); // Sale Data
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'csv', type: 'array' });
    this.saveAsCSVFile(excelBuffer, "customers");

  }

  saveAsCSVFile(buffer: any, fileName: string): void {

    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".csv";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );

  }

  toggleLock(data, frozen, index) {
    if (frozen) {
      this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
      this.unlockedCustomers.push(data);
    } else {
      this.unlockedCustomers = this.unlockedCustomers.filter(
        (c, i) => i !== index
      );
      this.lockedCustomers.push(data);
    }

    this.unlockedCustomers.sort((val1, val2) => {
      return val1.id < val2.id ? -1 : 1;
    });
  }

  calculateCustomerTotal(name) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer?.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }

  formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  selectStatus(item: any) {

    if (item.value.label == 'Active') {
      this.searchParam.Status = 'true';

    }
    else if (item.value.label == 'InActive') {

      this.searchParam.Status = 'false';

    }
    else {

      this.searchParam.Status = '';

    }
    this.GetClientDetailList();

  }


  advanceFilter(type:any) {
    debugger
    this.showReset=false;
    if(type=='search')
    {
    this.displayPosition = false;
    }
    this.advanceStatus = !this.advanceStatus;
    this.clientsService.filterData;
    if (this.clientsService.filterData.firstName != "" && this.clientsService.filterData.firstName !=undefined) {
      this.showReset=true;
      this.searchParam.FirstName = JSON.stringify(this.clientsService.filterData.firstName);


    }
    if (this.clientsService.filterData.lastName != "" && this.clientsService.filterData.lastName !=undefined) {
      this.showReset=true;
      this.searchParam.LastName = JSON.stringify(this.clientsService.filterData.lastName);


    }
    if (this.clientsService.filterData.Email != "" && this.clientsService.filterData.Email != undefined) {
      this.showReset=true;

      this.searchParam.Email = JSON.stringify(this.clientsService.filterData.Email);

    }
    if (this.clientsService.filterData.age != 0 && this.clientsService.filterData.age !=undefined) {
      this.showReset=true;
      this.searchParam.Age = JSON.stringify(this.clientsService.filterData.age);

    }
    if (this.clientsService.filterData.assignedPhoneNumber != "" && this.clientsService.filterData.assignedPhoneNumber !=undefined) {
      this.showReset=true;
      this.searchParam.AssignedPhoneNum = JSON.stringify(this.clientsService.filterData.assignedPhoneNumber);

    }
    if (this.clientsService.filterData.clientsPhoneNumber != "" && this.clientsService.filterData.clientsPhoneNumber !=undefined) {
      this.showReset=true;
      this.searchParam.ClientPhoneNum = JSON.stringify(this.clientsService.filterData.clientsPhoneNumber);

    }
    if (this.clientsService.filterData.state != "" && this.clientsService.filterData.state != undefined) {
      this.showReset=true;
      this.searchParam.State = JSON.stringify(this.clientsService.filterData.state);

    }
    if (this.clientsService.filterData.city != "" && this.clientsService.filterData.city !=undefined) {

      this.showReset=true;
      this.searchParam.City = JSON.stringify(this.clientsService.filterData.city);

    }
    if (this.clientsService.filterData.zip != 0 && this.clientsService.filterData.zip !=undefined) {
      this.showReset=true;
      this.searchParam.Zip = JSON.stringify(this.clientsService.filterData.zip);

    }
    if (this.clientsService.filterData.clientType != "" && this.clientsService.filterData.clientType !=undefined) {
      this.showReset=true;
      this.searchParam.ClientType = JSON.stringify(this.clientsService.filterData.clientType);

    }
    if (this.clientsService.filterData.serviceType != "" && this.clientsService.filterData.serviceType !=undefined) {
      this.showReset=true;
      this.searchParam.ServiceType = JSON.stringify(this.clientsService.filterData.serviceType);

    }
    if (this.clientsService.filterData.residentialProvider != "" && this.clientsService.filterData.residentialProvider !=undefined) {
      this.showReset=true;
      this.searchParam.ResidentialProvider = JSON.stringify(this.clientsService.filterData.residentialProvider);

    }



    this.GetClientDetailList();








  }
  cancelDetails() {
    this.displayPosition = false;
  }

  advanceStatus: boolean = false;

  openFilterPopup() {
    this.displayPosition = true;
  }


  status: boolean = false;
  dropDownhandler() {
    this.status = !this.status;
  }

  status_1: boolean = false;
  dropDownhandler_1() {
    this.status_1 = !this.status_1;
  }

  GetClientDetailList() {
    const url = '/clients';


    this._httpService.Get(url, this.searchParam, 0).subscribe((res) => {

      if (res) {
        this.isLoad = false;

        this.customers = res;

        for (var i = 0; i < this.customers.length; i++) {

          if (this.customers[i].secondaryPhone !== "") {
            this.customers[i].secondaryPhone = this.phoneFormat(this.customers[i].secondaryPhone)
          }

          if (this.customers[i].primaryPhone !== "") {
            this.customers[i].primaryPhone = this.phoneFormat(this.customers[i].primaryPhone)
          }
        }
        // for(var i=0; i < this.customers.length ; i++)
        // {
        //   if(this.customers[i].clientServicesType=='BA')
        //   {
        //     this.customers[i].clientType="Clinical";
        //   }else if((this.customers[i].clientServicesType.indexOf('DS')>0 || this.customers[i].clientServicesType.indexOf('PA')>0) && this.customers[i].clientServicesType=='BA'){
        //     this.customers[i].clientType="Both";
        //   }
        //   else if(this.customers[i].clientServicesType=='') {
        //     this.customers[i].clientType="N/A";
        //   }
        //    else {
        //     this.customers[i].clientType="Residential";
        //    }

        // }
        if (this.customers.length == 0) {
          this.NoData = true;
        }
        else {
          this.NoData = false;
        }
        this.searchParam = {
          'page': '0',
          'pageSize': '20',
          'Status': '',
          'FirstName': '',
          'LastName': '',
          'Email': '',
          'Age': '',
          'AssignedPhoneNum': '',
          'ClientPhoneNum': '',
          'City': '',
          'State': '',
          'Zip': '',
          'ClientType': '',
          'ServiceType': '',
          'ResidentialProvider': '',

        }
      }
      else {

        console.log('something went wrong')
      }
    })
  }
  exportTypeClick(type: string) {
    this.exportType = type;
  }
  exportData() {
    if (this.exportType == 'CSV') {
      this.exportCSV();
    }
    else if (this.exportType == 'Excel') {
      this.exportExcel();
    }
    else if (this.exportType == 'PDF') {
      this.exportPdf();
    }
    else {

    }
  }
  phoneFormat(input) {
    // Strip all characters from the input except digits
    if (input != null) {
      input = input.replace(/\D/g, '');

      // Trim the remaining input to ten characters, to preserve phone number format
      input = input.substring(0, 10);

      // Based upon the length of the string, we add formatting as necessary
      var size = input.length;
      if (size == 0) {
        input = input;
      } else if (size < 4) {
        input = '(' + input;
      } else if (size < 7) {
        input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6);
      } else {
        input = '(' + input.substring(0, 3) + ') ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
      }
      return input;
    }
  }

  resetFilter(){
   
    this.clientsService.filterData.firstName=""
    this.clientsService.filterData.lastName=""
    this.clientsService.filterData.age=0
    this.clientsService.filterData.clientType=""
    this.clientsService.filterData.serviceType=""
    this.clientsService.filterData.residentialProvider=""
    this.clientsService.filterData.city=""
    this.clientsService.filterData.state=""
    this.clientsService.filterData.zip=0
    this.clientsService.filterData.assignedPhoneNumber=""
    this.clientsService.filterData.clientsPhoneNumber=""
    this.clientsService.filterData.Email="" 
    this.advanceFilter("reset");
  }

  saveLayout(){
   
    this.authService.isLoginData.name;
    this.selectedColumns
  }

}

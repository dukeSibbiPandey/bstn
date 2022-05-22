import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from './customerservice';
import { Customer } from './customer';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss'],
  providers: [MessageService],
})
export class ClientTableComponent {
  customers: Customer[];

  dialogVisible: boolean;

  scrollableCols: any[];

  frozenCols: any[];

  unlockedCustomers: any[];

  lockedCustomers: any[];

  cols: any[];

  _selectedColumns: any[];

  balanceFrozen: boolean = false;

  rowGroupMetadata: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService
      .getCustomersMedium()
      .then((data) => (this.customers = data));

    this.customerService
      .getCustomersMedium()
      .then((data) => (this.unlockedCustomers = data));

    this.frozenCols = [{ field: 'name', header: 'Name' }];

    this.cols = [
      { field: 'date', header: 'Date' },
      { field: 'company', header: 'Company' },
      { field: 'status', header: 'Status' },
      { field: 'activity', header: 'Activity' },
    ];

    this._selectedColumns = this.cols;

  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }
  

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.customers);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
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
}

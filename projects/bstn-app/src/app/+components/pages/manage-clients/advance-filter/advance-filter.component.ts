import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ClientFilters } from '../../manage-clients/clients'
import { ClientsService } from '../clientservice';
@Component({
  selector: 'app-advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.scss']
})
export class AdvanceFilterComponent implements OnInit {
  @Input() selectedItems: any;

  @Input() showActions = true;


  clientType = this.clientsService.clientType;
  serviceType = this.clientsService.serviceType;
  cityList = this.clientsService.cityList;
  stateList = this.clientsService.stateList;
  zipCodeList = this.clientsService.zipCodeList;
  
  
 
  constructor(public clientsService:ClientsService,private router: Router,) { }

  ngOnInit(): void {
   
 this.selectedItems = this.clientsService.filterData;
  
  }

}

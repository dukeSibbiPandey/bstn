import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validator, FormBuilder, ReactiveFormsModule, NgForm, FormArray, ValidationErrors, Validators } from '@angular/forms';
import { HttpService } from 'projects/bstn-app/src/app/+core/services/http.service';
import { MessageService } from 'primeng/api';
import { AddService,AddClientContact } from '../../../+components/_models/addService';
import { ActivatedRoute } from '@angular/router';
import { AddBehavior } from '../../../+components/_models/addService';
import { Router } from '@angular/router';
import { ClientsService } from '../manage-clients/clientservice'
import { DatePipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from 'projects/bstn-app/src/environments/environment';
import { ValidationHandler } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss'],
  providers: [MessageService]
})
export class AddNewClientComponent implements OnInit {
  formInput: FormGroup;
  displayPosition: boolean;
  displayPosition1: boolean;
displayPosition2:boolean;
  selectedItems: AddService;
  @Input() firstnamevalidation:boolean;
  activeClass= "";
  activeClass1= "";
  activeClass2= "";
  activeClass3= "";
  activeClass4= "";
  selectedItems2: AddClientContact;
  selectedItems1: AddBehavior;
  position: string;
  genderlst: any;
  citylst: any;
  statelst: any;
  ConservatorRelationlst: any;
  clientInfoForm: FormGroup;
  clientContactInfoForm: FormGroup;
  clientContactInfoForm1: FormGroup;
  commonToastPosition = 'top-center';
  contactTypelst: any;
  ClientProfileIDForService = 0;
  isEdit: boolean = false;
  showEdit:boolean;
  isContactUpdate: boolean = false;
  ClientProfileID = 0;
  ClientPictureID = 0;
  files: File[] = [];
  ClientServiceTypeId;
  ClientBillingTypeId;
  BehaviorAnalyst: boolean;
  BehaviorAnalystCheckbox:boolean;
  BehaviorSpecialist: boolean;
  BehaviorSpecialistCheckbox:boolean;
  SupportedLivingCheckbox:boolean;
  DayServiceCheckbox:boolean;
  SupportedLiving: boolean;
  DayService: boolean;
  ServiceName: boolean;
  BehaviorAnalystId: string;
  BehaviorSpecialistId: string;
  SupportedLivingId: string;
  DayServiceId: string;
  ServiceNameId: string;
  photoPath: string = '';
  showServiceInformation: boolean;
  showContactInformation: boolean;
  StateMonitorProfileID = 0;
  DropDownId = '';
  submitted = false;
  submittedContact = false;
  uploadFileData: any;
  servTypeCaption: string;
  Clientphoto:string;
  billingtype: string;
  displayPopup: boolean;
  displayPopupServiceFinal:boolean;
  displayPopupContactFinal:boolean;
  
  ManageCleintForm = {
    'State': ''
  }
  ViewName:string;
  clientPhotoObj:any;
  clientForm=
  {
  'FirstName': '',
  'MiddleName': '',
  'LastName': '',
  'CustomeInitial': '',
  'GivenName': '',
  'DateOfBirth': '',
  'Gender': '',
  'address': '',
  'AddressLine2': '',
  'State': '',
  'City': '',
  'Zip': '',
  'AssignedPhoneNumber': '',
  'ClientContactNumber': '',
  'SSN': '',
  'ConservatorFirstName':  '',
  'ConservatorLastName':  '',
  'ConservatorPhone':  '',
  'ConservatorRelation':  '',
  }
  DayList:any;
  MonthList:any;
  YearList:any;
  RelationType:any;
  contactShow:boolean;
  baseUrl:string;
  isphotoupload: boolean;
  Residentialprovider;
  clientServicetype: any;
  isMasterService: boolean;
  activeClassAddition="";
  ServicesTypeName:any;
  billingtype1:any;
  ServicetypeHeader="";
  AdditionalSer=[];
  index: number = 0;
  index1: number = 1;
  ClientType="";
  NotActive=[];
  IsServiceAdded:boolean=false; 
  constructor(private route: Router, private _ActivatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _httpService: HttpService, public _MessageService: MessageService,
    public clientsService: ClientsService) { }
  isLoad = true;
  selectedTab: number = 0;
  ngOnInit(): void {
    this.showEdit=false;
    this.baseUrl = environment.BASE_URL;
    this.DayList = this.clientsService.DayList;
    this.MonthList = this.clientsService.MonthList;
    this.YearList = this.clientsService.YearList;
    this.contactTypelst = this.clientsService.contactTypelst;
    this.ViewName = "Add Client";
    this.showServiceInformation = true;
    this.showContactInformation = true;
    this.contactShow = true;
 
    this.clientFormBind();
    this.clientContactFormBind();
   
    this.isLoad = false;
  
    this._ActivatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getClientDetails(params.id);
        this.getClientContactDetails(params.id)
        this.getServiceType(params.id);
        // this.getClientServiceDetails(params.id);
         this.showEdit=true;
        this.ViewName = "Edit Client";
        this.showServiceInformation = false;
        this.showContactInformation = false;
        this.contactShow = true;
      }


    });
    this.position = "right"
    this.genderlst = [
      { name: 'M', code: 'M' },
      { name: 'F', code: 'F' },
      { name: 'T', code: 'T' },

    ];
    this.citylst = [
      { name: 'NY', code: 'NY' },
      { name: 'LA', code: 'LA' },
      { name: 'Ch', code: 'Ch' },

    ];
    this.statelst = [
      { name: 'TN', code: 'TN' },
      { name: 'CA', code: 'CA' },
      { name: 'NY', code: 'NY' },
      { name: 'OR', code: 'OR' },
      { name: 'WA', code: 'WA' },
      { name: 'TX', code: 'TX' },

    ];





    this.ConservatorRelationlst = [
      { name: 'Physician', code: '1' },
      { name: 'State Monitor', code: '2' },
      { name: 'Support Coordinator', code: '3' },
      { name: 'Guardian', code: '4' },
      { name: 'Advocate', code: '5' },
      { name: 'Conservator', code: '6' },


    ];


  }
  Day = new FormControl("", [Validators.required]);
  Month = new FormControl("", [Validators.required]);
  Year = new FormControl("", [Validators.required]);
  FirstName = new FormControl("", [Validators.required]);
  MiddleName = new FormControl("");
  LastName = new FormControl("", [Validators.required]);
  CustomeInitial = new FormControl("", [Validators.required]);
  GivenName = new FormControl("");
  // DateOfBirth= new FormControl("",[Validators.required]);
  Gender = new FormControl("", [Validators.required]);
  address = new FormControl("", [Validators.required]);
  AddressLine2 = new FormControl("");
  State = new FormControl("", [Validators.required]);
  City = new FormControl("", [Validators.required]);
  ContactCity = new FormControl("", [Validators.required]);
  ContactState = new FormControl("", [Validators.required]);
  ContactZip = new FormControl("", [Validators.required]);
  Zip = new FormControl("", Validators.required);
  AssignedPhoneNumber = new FormControl("");
  ClientContactNumber = new FormControl("");
  SSN = new FormControl("");
  ConservatorFirstName = new FormControl("", [Validators.required]);
  ConservatorLastName = new FormControl("", [Validators.required]);
  ConservatorPhone = new FormControl("", [Validators.required]);
  ConservatorRelation = new FormControl("", [Validators.required]);
  Relationship = new FormControl("", [Validators.required]);
  Speciality = new FormControl("", [Validators.required]);
  Agency = new FormControl("", [Validators.required]);
  HourPhoneNo = new FormControl("");
  HomePhone = new FormControl("");
  CellPhone = new FormControl("");
  Email = new FormControl("", [Validators.required, Validators.email]);
  ContactType = new FormControl("", [Validators.required]);
  ContactForEmergency = new FormControl("");

  clientFormBind() {
    this.clientInfoForm = this._formBuilder.group({
      Day: this.Day,
      Month: this.Month,
      Year: this.Year,
      FirstName: this.FirstName,
      MiddleName: this.MiddleName,
      LastName: this.LastName,
      CustomeInitial: this.CustomeInitial,
      GivenName: this.GivenName,
      //DateOfBirth: this.DateOfBirth,
      Gender: this.Gender,
      address: this.address,
      AddressLine2: this.AddressLine2,
      State: this.State,
      City: this.City,
      Zip: this.Zip,
      AssignedPhoneNumber: this.AssignedPhoneNumber,
      ClientContactNumber: this.ClientContactNumber,
      SSN: this.SSN,
      ConservatorFirstName: this.ConservatorFirstName,
      ConservatorLastName: this.ConservatorLastName,
      ConservatorPhone: this.ConservatorPhone,
      ConservatorRelation: this.ConservatorRelation
    })
  }


  clientContactFormBind() {

    this.clientContactInfoForm = this._formBuilder.group({

      FirstName: this.FirstName,
      LastName: this.LastName,
      Relationship: this.Relationship,
      address: this.address,
      AddressLine2: this.AddressLine2,
      ContactState: this.ContactState,
      City: this.City,
      Zip: this.Zip,
      Speciality: this.Speciality,
      Agency: this.Agency,
      HourPhoneNo: this.HourPhoneNo,
      HomePhone: this.HomePhone,
      CellPhone: this.CellPhone,
      Email: this.Email,
      ContactType: this.ContactType,
      ContactForEmergency: this.ContactForEmergency,



    })
  }


  // clientContactFormBind1() {

  //   this.clientContactInfoForm1 = this._formBuilder.group({

  //     firstName: this.FirstName,
  //     lastName: this.LastName,
  //     relationship: this.Relationship,
  //     address: this.address,
  //     addressLine2: this.AddressLine2,
  //     contactState: this.ContactState,
  //     city: this.City,
  //     zip: this.Zip,
  //     speciality: this.Speciality,
  //     agency: this.Agency,
  //     hourPhoneNo: this.HourPhoneNo,
  //     homePhone: this.HomePhone,
  //     cellPhone: this.CellPhone,
  //     email: this.Email,
  //     contactType: this.ContactType,
  //     contactForEmergency: this.ContactForEmergency,



  //   })
  // }
  SaveFinal(){
    this.route.navigate(['/client/manage']);
  }

  CloseFinalPopup(){
    if((this.serviceType==undefined ||this.serviceType.length==0) && this.showEdit==false)
    {
      this.displayPopupServiceFinal=false;
      return false;
    }
    if((this.ContactList==undefined || this.ContactList.length==0) && this.showEdit==false)
    {
      this.displayPopupContactFinal=false;
      return false;
    }
  }
 

  FinalSave(){
    var clientid=this.ClientProfileID;
    if((this.serviceType==undefined ||this.serviceType.length==0) && this.showEdit==false)
    {
      this.displayPopupServiceFinal=true;
     
     return false;
    }
    if((this.ContactList==undefined || this.ContactList.length==0) && this.showEdit==false)
    {
      this.displayPopupContactFinal=true;
      return false;
    }
    else
    {
      this.route.navigate(['/client/manage']);
    }
  }


  toastMsg(severity: string, summary: string, detail: string, position: string) {
    this.commonToastPosition = position;
    this._MessageService.add({ key: 'clearkToastMsg', severity: severity, summary: summary, detail: detail });
  }
  toastMsg1(severity: string, summary: string, detail: string, position: string) {
    this.commonToastPosition = position;
    this._MessageService.add({ key: 'clearkToastMsg1', severity: severity, summary: summary, detail: detail });
  }
serviceTypeCheck:boolean;
displayPopupText:string;
  OpenPopup(servicetype: any,billingType:any,checkboxData:any) {
    debugger
    this.serviceTypeCheck=checkboxData.target.checked;
    if(this.serviceTypeCheck==false)
    {
      this.displayPopupText="Are You Sure to InActive Service?"
    }
    if(this.serviceTypeCheck==true)
    {
      this.displayPopupText="Are You Sure to Active Service?"
    }
    this.clientServicetype = servicetype;
    this.displayPopup = true;

    this.billingtype1=billingType;
  }
  CloseServicePopup() {
    this.displayPopup = false;
    if(this.clientServicetype==1 && this.billingtype1=='')
    {
       this.BehaviorAnalyst=true;
       
    }
    if(this.clientServicetype==2 && this.billingtype1=='')
    {
      this.BehaviorSpecialist=true;
       
    }
    if(this.clientServicetype==3 && this.billingtype1=='')
    {
      this.SupportedLiving=true;
      this.activeClass2="";
    }
    if(this.clientServicetype==4 && this.billingtype1=='')
    {
      this.DayService=true;
      
    }
    if(this.billingtype1!='')
    {
     
      document.getElementById(this.billingtype1).className="service-box active";
      
      
    }
  }
  inactiveServiceInfo(): void {
    debugger
    const Param = {
      'clientServiceType': this.clientServicetype,
      'billingType': this.billingtype1,
    }
    
    const url = '/clients/' + this.ClientProfileID + '' + '/Service/'+this.serviceTypeCheck;

    this._httpService.Put(url,0, Param, 0).subscribe((res) => {
      debugger;
      if (res == null) {
        if(this.clientServicetype==1 && this.billingtype1=='')
        {
           this.BehaviorAnalyst=false;
           this.activeClass="";
        }
        if(this.clientServicetype==2 && this.billingtype1=='')
        {
          this.BehaviorSpecialist=false;
           this.activeClass1="";
        }
        if(this.clientServicetype==3 && this.billingtype1=='')
        {
          this.SupportedLiving=false;
          this.activeClass2="";
        }
        if(this.clientServicetype==4 && this.billingtype1=='')
        {
          this.DayService=false;
          this.activeClass3="";
        }
        if(this.billingtype1!='')
        {
          this.NotActive.push(this.billingtype1);
          this.activeClassAddition="";
        }
        this.displayPopup = false;
        this.getServiceType(this.ClientProfileID);
      }
    })
  }


  SetValue($event: any): void {
    if (this.isEdit = true) {

      var id = this.DropDownId;
      $event.value.code = this.DropDownId
      $event.value.name = this.DropDownId
    }


  }
  ViewData: any;
  ClientProfileName:string;
  getClientDetails(ClientProfileId) {
    const url = '/clients/' + ClientProfileId + '';

    this._httpService.Get(url, 0, 0).subscribe((res) => {

      if (res) {
        
        let Data = JSON.parse(JSON.stringify(res));
        
        
        if (Data.conservator.relationshipID == 1) { this.RelationType = 'Physician' }
        else if (Data.conservator.relationshipID == 2) { this.RelationType = 'State Monitor' }
        else if (Data.conservator.relationshipID == 3) { this.RelationType = 'Support Coordinator' }
        else if (Data.conservator.relationshipID == 4) { this.RelationType = 'Guardian' }
        else if (Data.conservator.relationshipID == 5) { this.RelationType = 'Advocate' }
        else { this.RelationType = 'Conservator' }
        this.isEdit = true;
        this.ViewData = Data;
        //this.submitted = false;
        this.DropDownId = Data.state;
        this.StateMonitorProfileID = Data.stateMonitorProfileID;
        this.ClientProfileID = Data.id;
        this.clientsService.ClientProfileID= this.ClientProfileID;
        this.ClientProfileName=Data.firstName;
        this.ClientPictureID = Data.clientPicture.clientPictureID;
        this.photoPath = Data.clientPhoto
        //this.State.setValue(Data.state);
        //this.clientInfoForm.controls.State.setValue(Data.state);
        this.Clientphoto=Data.clientPicture.filePath;
        if(this.Clientphoto=='')
        {
          //this.Clientphoto='';
        }
        //this.ManageCleintForm.State=Data.state;
        //Data.dob = new Date(Data.dob);
        this.uploadFileData = Data.clientPicture;
        this.clientInfoForm = this._formBuilder.group({
          FirstName: Data.firstName,
          MiddleName: Data.middleName,
          LastName: Data.lastName,
          CustomeInitial: Data.customeInitial,
          GivenName: Data.givenName,
          // DateOfBirth: new Date(Data.dob),
          Year: { name: JSON.stringify(new Date(Data.dob).getFullYear()), code: JSON.stringify(new Date(Data.dob).getFullYear()) },
          Month: { name: Data.dob.substring(7,5), code:Data.dob.substring(7,5)  },
          Day: { name: Data.dob.substring(10,8), code: Data.dob.substring(10,8) },
          Gender: { name: Data.gender, code: Data.gender },
          address: Data.address,
          AddressLine2: Data.address2,
          State: { name: Data.state, code: Data.state },
          City: Data.city,
          Zip: Data.zip,
          AssignedPhoneNumber: Data.secondaryPhone,
          ClientContactNumber: Data.primaryPhone,
          SSN: Data.ssn,
          ConservatorFirstName: Data.conservator.firstName,
          ConservatorLastName: Data.conservator.lastName,
          ConservatorPhone: Data.conservator.phoneNo,
          ConservatorRelation: { name: this.RelationType, code: JSON.stringify(Data.conservator.relationshipID) },
        })

      }
      else {

        console.log('something went wrong')
      }
    })
  }


  ViewClientData: any;
  ContactTypeName: string;
  showContactForm:boolean;
  ContactList:any;
  getClientContactDetails(ClientProfileID) {
    const url = '/clients/' + ClientProfileID + '/ContactList';

debugger

    this._httpService.Get(url, 0, 0).subscribe((res) => {

      if (res) {
        this.ContactList=res;
        if(this.ContactList.length>0)
        {
          this.showContactForm=true;
        }
       

        for(var i=0; i< this.ContactList.length; i++ )
        {
          if(this.ContactList[i]._24HourPhone!=="")
{
  this.ContactList[i]._24HourPhone = this.phoneFormat( this.ContactList[i]._24HourPhone)
}

if(this.ContactList[i].homePhone!=="")
{
  this.ContactList[i].homePhone = this.phoneFormat( this.ContactList[i].homePhone)
}
if(this.ContactList[i].cellPhone!=="")
{
  this.ContactList[i].cellPhone = this.phoneFormat( this.ContactList[i].cellPhone)
}
        }
// this.showContactForm=true;
//         let Data = JSON.parse(JSON.stringify(res));
//         if (Data.contactTypeId == 1) { this.ContactTypeName = 'Conservator' }
//         else if (Data.contactTypeId == 2) { this.ContactTypeName = 'Independent Support Coordinator' }
//         else if (Data.contactTypeId == 3) { this.ContactTypeName = 'Advocate' }
//         else if (Data.contactTypeId == 4) { this.ContactTypeName = 'Family Member' }
//         else if (Data.contactTypeId == 5) { this.ContactTypeName = 'Primary Care Physician' }
//         else if (Data.contactTypeId == 6) { this.ContactTypeName = 'Secondary Care Physician' }
//         else if (Data.contactTypeId == 7) { this.ContactTypeName = 'Psychiatrist' }
//         else if (Data.contactTypeId == 8) { this.ContactTypeName = 'Nurse' }
//         else if (Data.contactTypeId == 9) { this.ContactTypeName = 'Dentist' }
//         else if (Data.contactTypeId == 10) { this.ContactTypeName = 'Other Specialist' }
//         else if (Data.contactTypeId == 11) { this.ContactTypeName = 'Behavior Analyst' }
//         else if (Data.contactTypeId == 12) { this.ContactTypeName = 'BSTN Manager' }
//         else if (Data.contactTypeId == 13) { this.ContactTypeName = 'Residential Agency' }
//         else if (Data.contactTypeId == 14) { this.ContactTypeName = 'Pharmacy' }
//         else if (Data.contactTypeId == 15) { this.ContactTypeName = 'Outcome Manager' }
//         else { this.ContactTypeName = 'Conservator' }
//         this.isEdit = true;
//         this.ViewClientData = Data;
//         if (this.ViewClientData) {
//           this.isContactUpdate = true;
//         }


        // this.clientContactInfoForm = this._formBuilder.group({
        //   FirstName: Data.firstName,
        //   LastName: Data.lastName,
        //   // ContactType:Data.contactTypeId,
        //   Specialty: Data.specialty,
        //   Agency: Data.agency,
        //   Relationship: Data.relationship,
        //   HourPhoneNo: Data._24HourPhone,
        //   address: Data.streetNumber,
        //   AddressLine2: Data.streetName,
        //   unitNumber: Data.unitNumber,
        //   State: { name: Data.state, code: Data.state },
        //   City: Data.city,
        //   Zip: Data.zip,
        //   HomePhone: Data.homePhone,
        //   CellPhone: Data.cellPhone,
        //   Email: Data.email,
        //   ContactType: { name: this.ContactTypeName, code: JSON.stringify(Data.contactTypeId) },

        // })

      }
      else {

        console.log('something went wrong')
      }
    })
  }





  serviceType: any;
  getServiceType(ClientProfileId) {

    const url = '/clients/' + ClientProfileId + '/Service';

    
   
    this._httpService.Get(url, 0, 0).subscribe((res) => {

      if (res) {
        this.AdditionalSer=[];
        this.serviceType = JSON.parse(JSON.stringify(res));
        if(this.serviceType.length==0 && this.showEdit==false)
        {
         
          //this.IsServiceAdded=true;
          this.toastMsg1('warn', '', 'Please Add Services..', 'center');
          //this.toastMsg1('warn', '', 'Please fill Residential Provider', 'centre');
          //this.showContactInformation=true;
         //return false;
          
        }
        else
        {
          //this.showContactInformation=false;
          //this.index=2;
        }
       

        this.clientsService.serviceTypes = this.serviceType;
        this.Residentialprovider=res[0].residentialprovider;
        this.isEdit = true;
        this.isLoad = false;
        for (var i = 0; i < this.serviceType.length; i++) {
          if (this.serviceType[i].clientServType == "1" && this.serviceType[i].clientBillingType=='') {
            this.BehaviorAnalyst = true;
            this.BehaviorAnalystCheckbox = this.serviceType[i].active;
            this.BehaviorAnalystId = "1";
            this.BehaviorAnalystCheckbox ==true?this.activeClass =  "active" : this.activeClass ="";
          } 
         else if (this.serviceType[i].clientServType == "2" && this.serviceType[i].clientBillingType=='') {
            this.BehaviorSpecialist = true;
            this.BehaviorSpecialistCheckbox = this.serviceType[i].active;
            this.BehaviorSpecialistId = "2";
            this.BehaviorSpecialistCheckbox==true? this.activeClass1 =  "active" :this.activeClass1 = "";
          }
          else if (this.serviceType[i].clientServType == "3" && this.serviceType[i].clientBillingType=='') {
            this.SupportedLiving = true;
            this.SupportedLivingCheckbox=this.serviceType[i].active;
            this.SupportedLivingId = "3";
            this.SupportedLivingCheckbox==true? this.activeClass2 =  "active": this.activeClass2 ="";
          }
          else if (this.serviceType[i].clientServType == "4" && this.serviceType[i].clientBillingType=='') {
            this.DayService = true;         
            this.DayServiceCheckbox= this.serviceType[i].active;
            this.DayServiceId = "4";
            this.DayServiceCheckbox==true?this.activeClass3 =  "active":this.activeClass3 ="";
          }
          else {
            this.ServiceName = true;
             //this.ServiceNameId = "5";
            
             this.AdditionalSer.push(this.serviceType[i]);
          }

        }
        var isboth1=false;
        var isboth2=false;
        this.ClientType='';
        for(var k=0;k<this.serviceType.length;k++)
        {
          if(this.serviceType[k].clientBillingType=='' && this.serviceType[k].active==true)
          {
         if(this.serviceType[k].clientServType==3 || this.serviceType[k].clientServType==4)
          {
           this.ClientType='Residential';
            isboth1=true;
           
          }
         if(this.serviceType[k].clientServType==1 || this.serviceType[k].clientServType==2)
          {
           this.ClientType='Clinical';
           isboth2=true;
          }
        }
        }
        if(isboth1==true && isboth2==true)
        {
          this.ClientType='Both';
        }
       


      }
      else {

        console.log('something went wrong')
      }
    })
  }

  serviceTypeData: any;
  ServPayerName: string;
  ServPayerType: any;
  servicesType1=[];
  getClientServiceDetails(ClientProfileId, serviceTypeId,billingType) {
    const url = '/clients/' + ClientProfileId + '/Service/' + serviceTypeId + '';
    const param={
      'billingType':billingType
    }


    this._httpService.Get(url, param, 0).subscribe((res) => {

      if (res) {
        if (res.clientBillingType==''){
          setTimeout(() => {
            document.getElementById("divBillingbehaviour").style.display = 'none';
            document.getElementById("divServicetypebehaviour").style.display = 'none';
          }, 100);
        }
        else {
          //this.servTypeCaption = "Personal Assistance"
          setTimeout(() => {
            document.getElementById("divBillingbehaviour").style.display = 'none';
            document.getElementById("divServicetypebehaviour").style.display = 'none';
          }, 100);
        }
        this.serviceTypeData = JSON.parse(JSON.stringify(res));
        this.isEdit = true;
        if(this.serviceTypeData.clientServType=="1")
        {
          this.ServicesTypeName="Behavior Analyst";
        }
        if(this.serviceTypeData.clientServType=="2")
        {
          this.ServicesTypeName="Behavior Specialist";
        }
        if(this.serviceTypeData.clientServType=="3")
        {
          this.ServicesTypeName="Supported Living";
        }
        if(this.serviceTypeData.clientServType=="4")
        {
          this.ServicesTypeName="Day Service";
        }
        if(this.serviceTypeData.clientServType=="5")
        {
          this.ServicesTypeName="Personal Assistance";
        }

        if (this.serviceTypeData.clientPayerAgency == "1") {
          this.ServPayerName = "Regional Office"
        }
       if (this.serviceTypeData.clientPayerAgency == "2") {
          this.ServPayerName = "Community Service Network"
        }  if (this.serviceTypeData.clientPayerAgency == "3") {
          this.ServPayerName = "Private Payee"
        }
        
        if(this.isMasterService==true)
        {
          this.clientsService.addBehavior.serviceType = this.serviceTypeData.clientServType;
        }
        else
        {
          debugger;
          this.servicesType1[0] = {label:this.ServicesTypeName,value:this.serviceTypeData.clientServType};
        }
        this.clientsService.addBehavior.billingType = this.serviceTypeData.clientBillingType;
        //this.clientsService.addBehavior.serviceType = this.serviceTypeData.clientServType;
        this.serviceRequestedYear = { name: JSON.stringify(new Date(this.serviceTypeData.clientServRequestedDate).getFullYear()), code: JSON.stringify(new Date(this.serviceTypeData.clientServRequestedDate).getFullYear()) },
          this.serviceRequestedMonth = { name: this.serviceTypeData.clientServRequestedDate.substring(7,5), code: this.serviceTypeData.clientServRequestedDate.substring(7,5) },
          this.serviceRequestedDay = { name: this.serviceTypeData.clientServRequestedDate.substring(10,8), code: this.serviceTypeData.clientServRequestedDate.substring(10,8) },
          this.serviceApproveYear = { name: JSON.stringify(new Date(this.serviceTypeData.clientServApprovalDate).getFullYear()), code: JSON.stringify(new Date(this.serviceTypeData.clientServApprovalDate).getFullYear()) },
          this.serviceApproveMonth = { name: this.serviceTypeData.clientServApprovalDate.substring(7,5), code: this.serviceTypeData.clientServApprovalDate.substring(7,5) },
          this.serviceApproveDay = { name: this.serviceTypeData.clientServApprovalDate.substring(10,8), code: this.serviceTypeData.clientServApprovalDate.substring(10,8) },
          this.serviceExpirationYear = { name: JSON.stringify(new Date(this.serviceTypeData.clientServExpirationDate).getFullYear()), code: JSON.stringify(new Date(this.serviceTypeData.clientServExpirationDate).getFullYear()) },
          this.serviceExpirationMonth = { name: this.serviceTypeData.clientServApprovalDate.substring(7,5), code: this.serviceTypeData.clientServApprovalDate.substring(7,5) },
          this.serviceExpirationDay ={ name: this.serviceTypeData.clientServApprovalDate.substring(10,8), code: this.serviceTypeData.clientServApprovalDate.substring(10,8) },
          this.ServPayerType = { label: this.ServPayerName, value: this.serviceTypeData.clientPayerAgency }
        this.clientsService.addBehavior.serviceRequestedYear = this.serviceRequestedYear,
          this.clientsService.addBehavior.serviceRequestedMonth = this.serviceRequestedMonth,
          this.clientsService.addBehavior.serviceRequestedDay = this.serviceRequestedDay,
          this.clientsService.addBehavior.serviceApproveYear = this.serviceApproveYear,
          this.clientsService.addBehavior.serviceApproveMonth = this.serviceApproveMonth,
          this.clientsService.addBehavior.serviceApproveDay = this.serviceApproveDay,
          this.clientsService.addBehavior.serviceExpirationYear = this.serviceExpirationYear,
          this.clientsService.addBehavior.serviceExpirationMonth = this.serviceExpirationMonth,
          this.clientsService.addBehavior.serviceExpirationDay = this.serviceExpirationDay,
          this.clientsService.addBehavior.unitNumber = this.serviceTypeData.unitNumber;
        this.clientsService.addBehavior.clientRatePerUnit = this.serviceTypeData.clientRate;
        this.clientsService.addBehavior.unitApproved = this.serviceTypeData.clientHoursApproved;
        this.clientsService.addBehavior.fundCode = this.serviceTypeData.clientFundCode;
        this.clientsService.addBehavior.payerAgency = this.ServPayerType;
        this.clientsService.addBehavior.payerAgencyAddress = this.serviceTypeData.clientPayerAgencyAddress;
        if(this.isMasterService==false)
        {
          this.clientsService.addBehavior.serviceType = this.servicesType1[0];
        }
        this.selectedItems1 = this.clientsService.addBehavior;

        this.displayPosition1 = true;

      }
      else {

        console.log('something went wrong')
      }
    })
  }



uploadListener($event:any): void {
    debugger;  
    this.isphotoupload=true;
  this.files.push($event.srcElement.files);
  const file = <File>this.files[0];
 const formData = new FormData();
  formData.append('file', file[0]);
 
 
  const url='/clients/'+ this.ClientProfileID + '/photo';

  const data={
    'ClientPicId':this.ClientPictureID
  }
    //var headers = { this.ClientPictureID }
    var ClientPicId=this.ClientPictureID;
    this._httpService.PostFile(url, formData, data, {}).subscribe((res) => {

      if (res) {
        debugger
        this.isphotoupload=false;
       // this.ViewData = res.result;
       this.Clientphoto="";
        this.uploadFileData = res.result;
        this.Clientphoto=res.result.file_Path;     
        this.toastMsg('success', 'success', 'Image uploaded successfully', 'top-right',)
               //this.UploadedSuccess.Success = 'Uploading Successfully Done....';

      } else {

      }
    }, (errors) => {


    })




  }
  showConfirm1() {
    this._MessageService.clear();
    this._MessageService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Add Contact', detail: 'Confirm to proceed' });
    
  }
  onConfirm() {
    this.route.navigate(['/client/manage']);
  }
  showConfirm(msg: any) {
    this._MessageService.clear();
    this._MessageService.add({ key: 'c', sticky: true, severity: 'warn', summary: msg, detail: 'Confirm to proceed' });
    this.route.navigate(['/client/manage']);
  }

  url: string;
  saveClientInfo(clientInfoForm: any) {

    this.submitted = true;
    if (clientInfoForm.valid) {
      this.submitted = false;
      this.showServiceInformation = false;
      if (this.ClientProfileID > 0) {
        this.url = '/clients/' + this.ClientProfileID + '';
      }
      else {
        this.url = '/clients';
      }

      let data = clientInfoForm.value;

      const postData = {
        //...this.clientPhotoObj,
        address: this.clientInfoForm.value.address,
        firstName: this.clientInfoForm.value.FirstName,
        lastName: this.clientInfoForm.value.LastName,
        middleName: this.clientInfoForm.value.MiddleName,
        city: this.clientInfoForm.value.City,
        state: this.clientInfoForm.value.State.code,
        zip: parseInt(this.clientInfoForm.value.Zip),
        gender: this.clientInfoForm.value.Gender.code,
        givenName: this.clientInfoForm.value.GivenName,
        // 'DOB':this.clientInfoForm.value.DateOfBirth,
        dob: new Date(this.clientInfoForm.value.Month.code + '/' + this.clientInfoForm.value.Day.code + '/' + this.clientInfoForm.value.Year.code),
        primaryPhone: this.clientInfoForm.value.AssignedPhoneNumber!=null?this.clientInfoForm.value.AssignedPhoneNumber.replace(/[^a-zA-Z0-9]/g,''):"",
        secondaryPhone: this.clientInfoForm.value.ClientContactNumber!=null?this.clientInfoForm.value.ClientContactNumber.replace(/[^a-zA-Z0-9]/g,''):"",
        address2: this.clientInfoForm.value.AddressLine2,
        customeInitial: this.clientInfoForm.value.CustomeInitial,
        ssn: this.clientInfoForm.value.SSN,
        unitNumber: "",
        fax: "",
        locationIP: "",
        inactive: true,
        clientType: "33",
        email: "",
        homeLatitute: "",
        homeLongitude: "",
        region: "",
        residentialProvider: "",
        conservator: {
          firstName: this.clientInfoForm.value.ConservatorFirstName,
          lastName: this.clientInfoForm.value.ConservatorLastName,
          phoneNo: parseInt(this.clientInfoForm.value.ConservatorPhone!=null?this.clientInfoForm.value.ConservatorPhone.replace(/[^a-zA-Z0-9]/g,''):""),
          relationshipID: this.clientInfoForm.value.ConservatorRelation.code,
          note: "",
          email: "",
        },
        clientPictures: {
          fileName: "",
          fileDescription: "",
          filePath: ""
        }




      }

      if (this.uploadFileData) {
        if (this.uploadFileData.fileName) {
          postData.clientPictures.fileName = this.uploadFileData.fileName;
          postData.clientPictures.fileDescription = this.uploadFileData.fileDescription;
          postData.clientPictures.filePath = this.uploadFileData.filePath;
        } else if (this.uploadFileData.file_Name) {
          postData.clientPictures.fileName = this.uploadFileData.file_Name;
          postData.clientPictures.fileDescription = this.uploadFileData.file_Description;
          postData.clientPictures.filePath = this.uploadFileData.file_Path;
        }
        else {
          postData.clientPictures.fileName = "";
          postData.clientPictures.fileDescription = "";
          postData.clientPictures.filePath = "";
        }

      }

      this.ViewData = {
        firstName:  this.clientInfoForm.value.FirstName,
        lastName:  this.clientInfoForm.value.LastName,
        gender:this.clientInfoForm.value.Gender.code,
        age:this.ageInYear
      };




      if (this.ClientProfileID > 0) {
        this._httpService.Put(this.url, postData, 0, 0).subscribe((res) => {

          if (res.responseCode == 200) {
            const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
          
            this.toastMsg('success', 'success', 'Updated Successfully', 'top-right',)
            this.showConfirm(msg);
           // this.selectedTab=2;
          }
          else {

            console.log('something went wrong')
          }
        },
          error => {

            this.toastMsg('error', 'error', error.error.Email[0], 'top-right')
          }
        )
      }
      else {
        this._httpService.Post(this.url, postData, 0, 0).subscribe((res) => {
         debugger;
          if (res.responseCode == 200) {
            const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
            this.toastMsg('success', 'success', 'Added Successfully', 'top-right',)
            this.index=0;
            this.index = (this.index === 0) ? this.index =1 : this.index ;
          //  this.showConfirm(msg);
         // this.selectedTab=2;
            this.ClientProfileID=res.result;

          }
          else {

            console.log('something went wrong')
          }
        },
          error => {

            this.toastMsg('error', 'error', error.error.CustomeInitial[0], 'top-right')
          })
      }

    }


    else {
      if (!this.isEdit) {
        this.toastMsg('error', 'Form Validation Error', 'Please fill all required fields', 'top-right');
      }
      else {
        this.toastMsg('error', 'Form Validation Error', 'Please fill all required fields', 'top-right');
        this.submitted = false;
      }

    }
  }





  cancelClientInfo(){
    this.route.navigate(['/client/manage']);
  }

  cancelInfo() {
    if(this.showEdit==false)
    {
    this.FinalSave();
    }
    else
    {
    this.route.navigate(['/client/manage']);
    }
  }

  cancelDetails() {
    
    this.displayPosition = false;
    this.displayPosition1 = false;
    this.displayPosition2= false;
  }

  openAddServicePopup(elemrnt: any) {
    setTimeout(() => {
      document.getElementById("Billing").innerText = '';
      document.getElementById("idClientRate").innerText = '';
      document.getElementById("idunitAproved").innerText = '';
      document.getElementById("idfundCode").innerText = '';
      document.getElementById("idpayeragency").innerText = '';
      document.getElementById("idservicetype").innerText='';
      document.getElementById("serviceRequesteM").innerText='';
      document.getElementById("serviceRequesteD").innerText='';
      document.getElementById("serviceRequesteY").innerText='';
      document.getElementById("serviceApproveD").innerText='';
      document.getElementById("serviceApproveM").innerText='';
      document.getElementById("serviceApproveY").innerText='';
      document.getElementById("serviceExpireD").innerText='';
      document.getElementById("serviceExpireM").innerText='';
      document.getElementById("serviceExpireY").innerText='';
    
    }, 100);
    if((this.Residentialprovider==undefined || this.Residentialprovider=='') && (elemrnt == 3 || elemrnt == 4))
    {
      
      this.toastMsg1('warn', '', 'Please fill Residential Provider', 'centre');
      
    }
    else
    {
    this.isMasterService = false;
    if (elemrnt == 1 || elemrnt == 2 || elemrnt == 3 || elemrnt == 4) {
      this.isMasterService = true;
      this.clientServicetype=elemrnt;
      setTimeout(() => {
        document.getElementById("divBilling").style.display = 'none';
        document.getElementById("divServicetype").style.display = 'none';

      }, 100);

      //this.isShowBillingType.emit(true);
    }

    else {
      setTimeout(() => {
        document.getElementById("divBilling").style.display = 'block';
        document.getElementById("divServicetype").style.display = 'block';

      }, 100);
    }
    //(<HTMLFormElement>document.getElementById("addProductForm")).reset();
    this.ClientProfileIDForService = this.ClientPictureID;
    this.selectedItems = this.clientsService.addServiceData;
     if(elemrnt==1)
     {
      this.ServicetypeHeader="Behavior Analyst Details";
     }
     if(elemrnt==2)
     {
      this.ServicetypeHeader="Behavior Specialist Details";
     }
     if(elemrnt==3)
     {
      this.ServicetypeHeader="Supported Living Details";
     }if(elemrnt==4)
     {
      this.ServicetypeHeader="Day Service Details";
     }
     if(elemrnt==0)
     {
      this.ServicetypeHeader="Add Service Details";
     }
    this.displayPosition = true;
    //this.HideValidation();
    //this.displayPopup=false;
    }
  }

  openAddClientPopup(){

    
    // this.clientsService.addNewContact={}
    // this.clientsService.addContactData=[];
  //  this.clientsService.addNewContactNew.C=0;
  this.clientsService.addNewContactNew.ContactContactType="",
 this.clientsService.addNewContactNew.ContactFirstName="",
this.clientsService.addNewContactNew.ContactLastName="",
this.clientsService.addNewContactNew.ContactSpeciality="",
this.clientsService.addNewContactNew.ContactAgency="",
this.clientsService.addNewContactNew.ContactRelationship="",
this.clientsService.addNewContactNew.ContactHourPhoneNo="",
 this.clientsService.addNewContactNew.Contactaddress="",
this.clientsService.addNewContactNew.ContactAddressLine2="",
 
 this.clientsService.addNewContactNew.ContactCity="",
 this.clientsService.addNewContactNew.ContactState="",
 this.clientsService.addNewContactNew.ContactZip=0,
 this.clientsService.addNewContactNew.ContactHomePhone="",
 this.clientsService.addNewContactNew.ContactCellPhone="",

 this.clientsService.addNewContactNew.ContactEmail="",
 
 this.clientsService.ContactId=0;
    this.postContactData={};
   // this.selectedItems2={};
    this.displayPosition2 = true;
  }


  openAddServiceEditPopup(serviceTypeId: any,billingType:any) {
    debugger;
   
    
    if (serviceTypeId == 1 && billingType=='') {
      this.isMasterService=true;
      this.servTypeCaption = "Behavior Analyst";
    }
    else if (serviceTypeId == 2 && billingType=='') {
      this.servTypeCaption = "Behavior Specialist";
      this.isMasterService=true;
    }
    else if (serviceTypeId == 3 && billingType=='') {
      this.servTypeCaption = "Supported Living";
      this.isMasterService=true;
    }
    else if (serviceTypeId == 4 && billingType=='') {
      this.servTypeCaption = "Day Service";
      this.isMasterService=true;
    }
    else
    { this.servTypeCaption = billingType;
      this.isMasterService=false;
    }
   
    this.getClientServiceDetails(this.ClientProfileID, serviceTypeId,billingType);

  }
  

  saveServiceInfo() {
    
    this.getServiceType(this.ClientProfileID);
    
    if(this.serviceType!=undefined)
    {
      debugger;
    if(this.serviceType.length>0)
    {
    //var ggg=this.index;
    if(this.index ==2)
    {
      //this.index =3
      this.showContactInformation=false;
    }
    
    if(this.index ==1)
    {
      this.index =2
      this.showContactInformation=false;
    }
    //this.index = (this.index ===1) ? this.index =2 : this.index;
    
    }
  }

      //
  }
  ShowContact()
  {
    this.showContactForm=false;
  }

  loadContact(){
    debugger
    this.getClientContactDetails(this.ClientProfileID)
  }

  openBehavior() {
    this.displayPosition1 = true;
  }

  cancelBehaviorDetails() {
    this.displayPosition1 = false;
  }

  saveBehavior() {

  }


  servicelst: any = {};
  serviceRequestedDay: any;
  serviceRequestedMonth: any;
  serviceRequestedYear: any;
  serviceApproveDay: any;
  serviceApproveMonth: any;;
  serviceApproveYear: any
  serviceExpirationDay: any;
  serviceExpirationMonth: any;
  serviceExpirationYear: any;

  

  saveService() {
    


    this.serviceRequestedDay = this.clientsService.addServiceData.serviceRequestedDay;
    
    this.serviceRequestedMonth = this.clientsService.addServiceData.serviceRequestedMonth;
    this.serviceRequestedYear = this.clientsService.addServiceData.serviceRequestedYear;
    this.serviceApproveDay = this.clientsService.addServiceData.serviceApproveDay;
    this.serviceApproveMonth = this.clientsService.addServiceData.serviceApproveMonth;
    this.serviceApproveYear = this.clientsService.addServiceData.serviceApproveYear
    this.serviceExpirationDay = this.clientsService.addServiceData.serviceExpirationDay;
    this.serviceExpirationMonth = this.clientsService.addServiceData.serviceExpirationMonth;
    this.serviceExpirationYear = this.clientsService.addServiceData.serviceExpirationYear
    this.servicelst = {


      "clientBillingType": this.clientsService.addServiceData.billingType,
      "clientServType": this.clientsService.addServiceData.serviceType,
      "clientServRequestedDate": "",
      "clientServApprovalDate": "",
      "clientServExpirationDate": "",
      "unitNumber": this.clientsService.addServiceData.unitNumber,
      "clientRate": this.clientsService.addServiceData.clientRatePerUnit,
      "clientMonthsApproved": 0,
      "clientHoursApproved": this.clientsService.addServiceData.unitApproved,
      "clientFundCode": this.clientsService.addServiceData.fundCode,
      "clientPayerAgency": this.clientsService.addServiceData.payerAgency,
      "clientPayerAgencyAddress": this.clientsService.addServiceData.payerAgencyAddress,
      "residentialProvider":this.Residentialprovider,

      "clientHourRate": 0


    }
    var ValidationHandler = false;
    debugger;
    if ((this.servicelst.clientBillingType == undefined || this.servicelst.clientBillingType == '') && this.isMasterService == false) {

      document.getElementById("Billing").innerText = 'Billing Type is required';
      ValidationHandler = true;

    }
    if ((this.servicelst.clientServType == undefined || this.servicelst.clientServType == '')&& this.isMasterService == false) {
      ValidationHandler = true;
      document.getElementById("idservicetype").innerText = 'ServiceType is required';

    }

    if (this.serviceRequestedDay == undefined || this.serviceRequestedDay == '') {
      ValidationHandler = true;
      document.getElementById("serviceRequesteD").innerText = 'Day is required';
    }
    if (this.serviceRequestedMonth == undefined|| this.serviceRequestedMonth == '') {
      ValidationHandler = true;
      document.getElementById("serviceRequesteM").innerText = 'Month is required';
    }
    if (this.serviceRequestedYear == undefined || this.serviceRequestedYear == '') {
      ValidationHandler = true;
      document.getElementById("serviceRequesteY").innerText = 'Year is required';
    }
    if (this.serviceApproveDay == undefined || this.serviceApproveDay == '') {
      ValidationHandler = true;
      document.getElementById("serviceApproveD").innerText = 'Day is required';
    }
    if (this.serviceApproveMonth == undefined ||this.serviceApproveMonth == '') {
      ValidationHandler = true;
      document.getElementById("serviceApproveM").innerText = 'Month is required';
    }
    if (this.serviceApproveYear == undefined|| this.serviceApproveYear == '') {
      ValidationHandler = true;
      document.getElementById("serviceApproveY").innerText = 'Year is required';
    }
    if (this.serviceExpirationDay == undefined || this.serviceExpirationDay == '') {
      ValidationHandler = true;
      document.getElementById("serviceExpireD").innerText = 'Day is required';
    }
    if (this.serviceExpirationMonth == undefined||this.serviceExpirationMonth == '') {
      ValidationHandler = true;
      document.getElementById("serviceExpireM").innerText = 'Month is required';
    }
    if (this.serviceExpirationYear == undefined || this.serviceExpirationYear=='') {
      ValidationHandler = true;
      document.getElementById("serviceExpireY").innerText = 'Year is required';
    }
    if (this.servicelst.clientRate == undefined||this.servicelst.clientRate == '') {
      ValidationHandler = true;
      document.getElementById("idClientRate").innerText = 'Client Rate is required';
    }
    if (this.servicelst.clientHoursApproved == undefined||this.servicelst.clientHoursApproved == '') {
      ValidationHandler = true;
      document.getElementById("idunitAproved").innerText = 'Unit Approved is required';
    }
    if (this.servicelst.clientFundCode == undefined||this.servicelst.clientFundCode == '') {
      ValidationHandler = true;
      document.getElementById("idfundCode").innerText = 'Fund Code is required';
    }
    if (this.servicelst.clientPayerAgency == undefined||this.servicelst.clientPayerAgency == '') {
      ValidationHandler = true;
      document.getElementById("idpayeragency").innerText = 'Payer Agency is required';
    }
    if (ValidationHandler) {
      this.toastMsg('error', 'Form Validation Error', 'Please fill all required fields', 'top-left');
      return false;
    }

    this.servicelst.clientBillingType = this.servicelst.clientBillingType == undefined ? "" : this.servicelst.clientBillingType;
    if (this.isMasterService == true) {
      this.servicelst.clientServType = this.clientServicetype;
    }
    else {
      this.servicelst.clientServType = this.servicelst.clientServType.value;
    }
    this.servicelst.clientPayerAgency = this.servicelst.clientPayerAgency.value;
    this.servicelst.clientServRequestedDate = new Date(this.serviceRequestedMonth.code + '/' + this.serviceRequestedDay.code + '/' + this.serviceRequestedYear.code),
      this.servicelst.clientServApprovalDate = new Date(this.serviceApproveMonth.code + '/' + this.serviceApproveDay.code + '/' + this.serviceApproveYear.code),
      this.servicelst.clientServExpirationDate = new Date(this.serviceExpirationMonth.code + '/' + this.serviceExpirationDay.code + '/' + this.serviceExpirationYear.code);
      //this.showContactInformation = false;
    //if(this.serviceType!=undefined)
    //{
    //if (this.serviceType.length > 0) {
      //for (var i = 0; i < this.serviceType.length; i++) {
        //if (this.serviceType[i].clientServType == this.servicelst.clientServType) {

          //return false;
        //}
      //}

    //}
  //}

  
  
  
 
  

    const url = '/clients/' + this.ClientProfileID + '/Service';
    this._httpService.Post(url, this.servicelst, {}, 0).subscribe((res) => {

      if (res.responseCode == 200) {
        this.displayPosition = false;
        this.servicelst.clientBillingType="";
        this.clientsService.addServiceData.billingType="";
        this.servicelst.clientServType="";
        this.clientsService.addServiceData.unitNumber="";
         this.clientsService.addServiceData.serviceRequestedMonth="";
        this.clientsService.addServiceData.serviceRequestedYear="";
         this.clientsService.addServiceData.serviceApproveDay="";
         this.clientsService.addServiceData.serviceApproveMonth="";
         this.clientsService.addServiceData.serviceApproveYear=""
         this.clientsService.addServiceData.serviceExpirationDay="";
         this.clientsService.addServiceData.serviceExpirationMonth="";
         this.clientsService.addServiceData.serviceExpirationYear="";
          this.clientsService.addServiceData.clientRatePerUnit="";
         
          this.clientsService.addServiceData.unitApproved="";
          this.clientsService.addServiceData.fundCode="";
          this.clientsService.addServiceData.payerAgency="";
          this.clientsService.addServiceData.payerAgencyAddress="";
          this.clientsService.addServiceData.serviceRequestedDay="";
         
          

        this.getServiceType(this.ClientProfileID);
        //this.showContactInformation = false;
        const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
        this.toastMsg('success', 'Success', msg, 'top-left')

      }
      else {

        console.log('something went wrong')
      }
    })
  }


  saveClientContactInfo(clientContactInfoForm: any) {

    this.submittedContact = true;
    if (clientContactInfoForm.valid) {
      const url = '/clients/' + this.ClientProfileID + '/Contact';
      this.submittedContact = false;
      const postContactData = {
        contactId: 0,
        contactTypeId: this.clientContactInfoForm.value.ContactType.code,
        firstName: this.clientContactInfoForm.value.FirstName,
        lastName: this.clientContactInfoForm.value.LastName,
        specialty: this.clientContactInfoForm.value.Speciality,
        agency: this.clientContactInfoForm.value.Agency,
        relationship: this.clientContactInfoForm.value.Relationship,
        _24HourPhone: this.clientContactInfoForm.value.HourPhoneNo!=""?this.clientContactInfoForm.value.HourPhoneNo.replace(/[^a-zA-Z0-9]/g,''):"",
        streetNumber: this.clientContactInfoForm.value.address,
        streetName: this.clientContactInfoForm.value.AddressLine2,
        unitNumber: this.clientContactInfoForm.value.unitNumber,
        city: this.clientContactInfoForm.value.City,
        state: this.clientContactInfoForm.value.ContactState.code,
        zip: parseInt(this.clientContactInfoForm.value.Zip),
        homePhone: this.clientContactInfoForm.value.HomePhone!=null?this.clientContactInfoForm.value.HomePhone.replace(/[^a-zA-Z0-9]/g,''):"",
        cellPhone: this.clientContactInfoForm.value.CellPhone!=null?this.clientContactInfoForm.value.CellPhone.replace(/[^a-zA-Z0-9]/g,''):"",
        fax: "",
        email: this.clientContactInfoForm.value.Email,
        inactive: true,
        islocal: true,

      }
      if (this.isContactUpdate == true) {
        this._httpService.Put(url, postContactData, 0, 0).subscribe((res) => {


          const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
          // this.showConfirm(msg);
          this.getClientContactDetails(this.ClientProfileID);
          this.showContactForm=true;

        })
      }
      else {
        this._httpService.Post(url, postContactData, 0, 0).subscribe((res) => {

          
          const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
          // this.showConfirm(msg);
          // this.index=1;
          // this.index = (this.index === 1) ? this.index =2 : this.index ;
          this.getClientContactDetails(this.ClientProfileID);
          this.showContactForm=true;
          
        })

      }
    }
    else {
      
      {
        this.submittedContact = true;
       
      }
    
    }
  }

  Nevigate() {
    this.route.navigate(['/client/manage']);
  }

  UpdateService() {
    
   
    this.serviceRequestedDay = this.clientsService.addBehavior.serviceRequestedDay;
    this.serviceRequestedMonth = this.clientsService.addBehavior.serviceRequestedMonth;
    this.serviceRequestedYear = this.clientsService.addBehavior.serviceRequestedYear;
    this.serviceApproveDay = this.clientsService.addBehavior.serviceApproveDay;
    this.serviceApproveMonth = this.clientsService.addBehavior.serviceApproveMonth;
    this.serviceApproveYear = this.clientsService.addBehavior.serviceApproveYear
    this.serviceExpirationDay = this.clientsService.addBehavior.serviceExpirationDay;
    this.serviceExpirationMonth = this.clientsService.addBehavior.serviceExpirationMonth;
    this.serviceExpirationYear = this.clientsService.addBehavior.serviceExpirationYear
    this.servicelst = {


      "clientBillingType": this.clientsService.addBehavior.billingType,
      "clientServType": this.clientsService.addBehavior.serviceType,
      "clientServRequestedDate": "",
      "clientServApprovalDate": "",
      "clientServExpirationDate": "",
      "unitNumber": this.clientsService.addBehavior.unitNumber,
      "clientRate": this.clientsService.addBehavior.clientRatePerUnit,
      "clientMonthsApproved": 0,
      "clientHoursApproved": this.clientsService.addBehavior.unitApproved,
      "clientFundCode": this.clientsService.addBehavior.fundCode,
      "clientPayerAgency": this.clientsService.addBehavior.payerAgency,
      "clientPayerAgencyAddress": this.clientsService.addBehavior.payerAgencyAddress,

      "clientHourRate": 0


    }

    var ValidationHandler = false;
    if (this.servicelst.clientRate == undefined||this.servicelst.clientRate == '') {
      ValidationHandler = true;
      document.getElementById("idbefaviourClientRate").innerText = 'Client Rate is required';
    }
    if (this.servicelst.clientHoursApproved == undefined||this.servicelst.clientHoursApproved == '') {
      ValidationHandler = true;
      document.getElementById("idbehavunitAproved").innerText = 'Unit Approved is required';
    }
    if (this.servicelst.clientFundCode == undefined||this.servicelst.clientFundCode == '') {
      ValidationHandler = true;
      document.getElementById("idbehafundCode").innerText = 'Fund Code is required';
    }
    if(ValidationHandler==true)
    {
      return false;
    }
    debugger;
    if (this.isMasterService == true) {
      this.servicelst.clientServType = this.clientsService.addBehavior.serviceType;
    }
    else {
      this.servicelst.clientServType = this.servicelst.clientServType.value;
    }

    this.servicelst.clientPayerAgency = this.servicelst.clientPayerAgency.value;
    this.servicelst.clientServRequestedDate = new Date(this.serviceRequestedMonth.code + '/' + this.serviceRequestedDay.code + '/' + this.serviceRequestedYear.code),
      this.servicelst.clientServApprovalDate = new Date(this.serviceApproveMonth.code + '/' + this.serviceApproveDay.code + '/' + this.serviceApproveYear.code),
      this.servicelst.clientServExpirationDate = new Date(this.serviceExpirationMonth.code + '/' + this.serviceExpirationDay.code + '/' + this.serviceExpirationYear.code);
      //this.showContactInformation = false;

    const url = '/clients/' + this.ClientProfileID + '/Service';
    this._httpService.Put(url, this.servicelst, {}, 0).subscribe((res) => {     
      this.getServiceType(this.ClientProfileID);
      this.displayPosition1 = false;
      //this.showContactInformation = false;
      const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
      this.toastMsg('success', 'Success', msg, 'top-left')

    })
  }




dobDis:any;
ageInYear:any;
_calculateAge(birthday:any) { // birthday is a date
  if(this.clientInfoForm.value.Month.code!="" && this.clientInfoForm.value.Day.code !="" && this.clientInfoForm.value.Year.code!="")
  {
 this.dobDis=   new Date(this.clientInfoForm.value.Month.code + '/' + this.clientInfoForm.value.Day.code + '/' + this.clientInfoForm.value.Year.code);
  var ageDifMs = Date.now() -  this.dobDis.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  this.ageInYear= Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
ContactListDataById:any;
TypeContact:any;
TypeState:any;
editContact(ContactList:any){
  const url='/clients/'+ ContactList.contactId +'/Contact';
  this._httpService.Get(url,0,0).subscribe((res) => {
    debugger
     if (res) {      

       this.ContactListDataById= JSON.parse(JSON.stringify(res)); 
       if ( this.ContactListDataById.contactTypeId == 1) { this.ContactTypeName = 'Conservator' }
             else if ( this.ContactListDataById.contactTypeId == 2) { this.ContactTypeName = 'Independent Support Coordinator' }
               else if ( this.ContactListDataById.contactTypeId == 3) { this.ContactTypeName = 'Advocate' }
                else if ( this.ContactListDataById.contactTypeId == 4) { this.ContactTypeName = 'Family Member' }
               else if ( this.ContactListDataById.contactTypeId == 5) { this.ContactTypeName = 'Primary Care Physician' }
               else if ( this.ContactListDataById.contactTypeId == 6) { this.ContactTypeName = 'Secondary Care Physician' }
                else if ( this.ContactListDataById.contactTypeId == 7) { this.ContactTypeName = 'Psychiatrist' }
               else if ( this.ContactListDataById.contactTypeId == 8) { this.ContactTypeName = 'Nurse' }
               else if ( this.ContactListDataById.contactTypeId == 9) { this.ContactTypeName = 'Dentist' }
               else if ( this.ContactListDataById.contactTypeId == 10) { this.ContactTypeName = 'Other Specialist' }
               else if ( this.ContactListDataById.contactTypeId == 11) { this.ContactTypeName = 'Behavior Analyst' }
              else if ( this.ContactListDataById.contactTypeId == 12) { this.ContactTypeName = 'BSTN Manager' }
                else if ( this.ContactListDataById.contactTypeId == 13) { this.ContactTypeName = 'Residential Agency' }
               else if ( this.ContactListDataById.contactTypeId == 14) { this.ContactTypeName = 'Pharmacy' }
               else if ( this.ContactListDataById.contactTypeId == 15) { this.ContactTypeName = 'Outcome Manager' }
              else { this.ContactTypeName = 'Conservator' }
              this.TypeContact={ name: this.ContactTypeName, code: JSON.stringify(this.ContactListDataById.contactTypeId) },
           this.TypeState=   { name: this.ContactListDataById.state, code: this.ContactListDataById.state };
              this.clientsService.ContactId=this.ContactListDataById.contactId;
       this.clientsService.addNewContactNew.ContactContactType = this.TypeContact;
       this.clientsService.addNewContactNew.ContactFirstName= this.ContactListDataById.firstName,
       this.clientsService.addNewContactNew.ContactLastName =  this.ContactListDataById.lastName;
       this.clientsService.addNewContactNew.ContactSpeciality= this.ContactListDataById.specialty;
       this.clientsService.addNewContactNew.ContactAgency =  this.ContactListDataById.agency;
       this.clientsService.addNewContactNew.ContactRelationship= this.ContactListDataById.relationship;
       this.clientsService.addNewContactNew.ContactHourPhoneNo= this.ContactListDataById._24HourPhone;
       this.clientsService.addNewContactNew.Contactaddress= this.ContactListDataById.streetNumber;
       this.clientsService.addNewContactNew.ContactAddressLine2= this.ContactListDataById.streetName;
       this.clientsService.addNewContactNew.ContactCity = this.ContactListDataById.city;
       this.clientsService.addNewContactNew.ContactState = this.TypeState;
       this.clientsService.addNewContactNew.ContactZip =  this.ContactListDataById.zip;
       this.clientsService.addNewContactNew.ContactHomePhone =  this.ContactListDataById.homePhone;
       this.clientsService.addNewContactNew.ContactCellPhone =  this.ContactListDataById.cellPhone;
       this.clientsService.addNewContactNew.ContactEmail =  this.ContactListDataById.email;
       this.displayPosition2=true;
     }
     else {
       
       console.log('something went wrong')
   }
 })
 
}

postContactData:any;
saveContact(){
  debugger
  if(this.clientsService.addNewContact.firstName=="")
  {
    this.firstnamevalidation=true;
    return false;
  }
  const url = '/clients/' + this.ClientProfileID + '/Contact';
  this.submittedContact = false;
  debugger
   this.postContactData = {
    contactId: this.clientsService.addNewContact.contactId?this.clientsService.addNewContact.contactId:0,
    contactTypeId: this.clientsService.addNewContact.contactType,
    firstName: this.clientsService.addNewContact.firstName,
    lastName: this.clientsService.addNewContact.lastName,
    specialty: this.clientContactInfoForm.value.speciality,
    agency: this.clientsService.addNewContact.agency,
    relationship: this.clientsService.addNewContact.relationship,
    _24HourPhone: this.clientsService.addNewContact.hourPhoneNo==""?"":this.clientsService.addNewContact.hourPhoneNo.replace(/[^a-zA-Z0-9]/g,''),
    streetNumber: this.clientsService.addNewContact.address,
    streetName: this.clientsService.addNewContact.addressLine2,
    unitNumber: "",
    city: this.clientsService.addNewContact.city,
    state: this.clientsService.addNewContact.state,
    zip: this.clientsService.addNewContact.zip,
    homePhone: this.clientsService.addNewContact.homePhone==""?"":this.clientsService.addNewContact.homePhone.replace(/[^a-zA-Z0-9]/g,''),
    cellPhone: this.clientsService.addNewContact.cellPhone==""?"":this.clientsService.addNewContact.cellPhone.replace(/[^a-zA-Z0-9]/g,''),
    fax: "",
    email: this.clientsService.addNewContact.email,
    inactive: true,
    islocal: true,

  }
  this.postContactData.contactTypeId =  this.postContactData.contactTypeId.code;
  this.postContactData.state =   this.postContactData.state.code;

  if (this.postContactData.contactId>0) {
    this._httpService.Put(url, this.postContactData, 0, 0).subscribe((res) => {

    //  this.clientsService.addNewContact={};
      const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully';
      this.displayPosition2=false;
      this.getClientContactDetails(this.ClientProfileID)
      //this.showConfirm(msg);
      


    })
  }
  else {
    this._httpService.Post(url, this.postContactData, 0, 0).subscribe((res) => {

      
      const msg = !this.isEdit ? 'Added Successfully' : 'Updated Successfully'
     // this.clientsService.addNewContact={};
      this.displayPosition2=false;
      this.getClientContactDetails(this.ClientProfileID)
      
    })

  }


}

closepopup(data:any){
  this.displayPosition2=false;
  this.getClientContactDetails(this.ClientProfileID)
}

phoneFormat(input){
  // Strip all characters from the input except digits
  if(input!=null)
  {
  input = input.replace(/\D/g,'');
  
  // Trim the remaining input to ten characters, to preserve phone number format
  input = input.substring(0,10);

  // Based upon the length of the string, we add formatting as necessary
  var size = input.length;
  if(size == 0){
          input = input;
  }else if(size < 4){
          input = '('+input;
  }else if(size < 7){
          input = '('+input.substring(0,3)+') '+input.substring(3,6);
  }else{
          input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
  }
  return input; 
}
}

}

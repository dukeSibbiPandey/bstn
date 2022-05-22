import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'projects/bstn-app/src/app/+core/services/http.service';
import { ClientsService } from 'projects/bstn-app/src/app/+features/client/clientservice';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-add-contact-client',
  templateUrl: './add-client-contact.component.html',
  styleUrls: ['./add-client-contact.component.scss']
})
export class AddClientContactComponent implements OnInit {
  @Input() selectedItems2: any;
  @Input() showActions = true;
  @Output()
  closePopup = new EventEmitter();
  firstnamevalidation: boolean;
  submittedContact: boolean;
  contactTypelst: any;
  statelst: any;
  constructor(private route: Router, private _ActivatedRoute: ActivatedRoute, private _formBuilder: FormBuilder, private _httpService: HttpService, public _MessageService: MessageService,
    public clientsService: ClientsService) {
  }
  ContactFirstName = new FormControl("", [Validators.required]);
  ContactLastName = new FormControl("", [Validators.required]);
  Contactaddress = new FormControl("", [Validators.required]);
  ContactAddressLine2 = new FormControl("");
  ContactState = new FormControl("", [Validators.required]);
  ContactCity = new FormControl("", [Validators.required]);
  ContactZip = new FormControl("", Validators.required);
  ContactRelationship = new FormControl("", [Validators.required]);
  ContactSpeciality = new FormControl("", [Validators.required]);
  ContactAgency = new FormControl("", [Validators.required]);
  ContactHourPhoneNo = new FormControl("");
  ContactHomePhone = new FormControl("");
  ContactCellPhone = new FormControl("");
  ContactEmail = new FormControl("", [Validators.required, Validators.email]);
  ContactContactType = new FormControl("", [Validators.required]);
  ContactContactForEmergency = new FormControl("");
  clientContactInfoForm1: FormGroup;

  ngOnInit(): void {
    this.contactTypelst = this.clientsService.contactTypelst;
    this.selectedItems2 = this.clientsService.addNewContactNew;
    this.statelst = [
      { name: 'TN', code: 'TN' },
      { name: 'CA', code: 'CA' },
      { name: 'NY', code: 'NY' },
      { name: 'OR', code: 'OR' },
      { name: 'WA', code: 'WA' },
      { name: 'TX', code: 'TX' },

    ];

    this.clientContactFormBind1();
  }

  clientContactFormBind1() {

    this.clientContactInfoForm1 = this._formBuilder.group({

      ContactFirstName: this.ContactFirstName,
      ContactLastName: this.ContactLastName,
      ContactRelationship: this.ContactRelationship,
      Contactaddress: this.Contactaddress,
      ContactAddressLine2: this.ContactAddressLine2,
      ContactState: this.ContactState,
      ContactCity: this.ContactCity,
      ContactZip: this.ContactZip,
      ContactSpeciality: this.ContactSpeciality,
      ContactAgency: this.ContactAgency,
      ContactHourPhoneNo: this.ContactHourPhoneNo,
      ContactHomePhone: this.ContactHomePhone,
      ContactCellPhone: this.ContactCellPhone,
      ContactEmail: this.ContactEmail,
      ContactContactType: this.ContactContactType,
      ContactContactForEmergency: this.ContactContactForEmergency,
    })

  }

  cancelInfo(data: any) {

    this.closePopup.emit();
  }
  postContactData: any;
  saveContact(clientContactInfoForm1: any) {

    this.submittedContact = false;
    if (clientContactInfoForm1.valid) {
      const url = '/clients/' + this.clientsService.ClientProfileID + '/Contact';
      this.submittedContact = false;

      this.postContactData = {
        contactId: this.clientsService.ContactId != 0 ? this.clientsService.ContactId : 0,
        contactTypeId: clientContactInfoForm1.value.ContactContactType,
        firstName: clientContactInfoForm1.value.ContactFirstName,
        lastName: clientContactInfoForm1.value.ContactLastName,
        specialty: clientContactInfoForm1.value.ContactSpeciality,
        agency: clientContactInfoForm1.value.ContactAgency,
        relationship: clientContactInfoForm1.value.ContactRelationship,
        _24HourPhone: clientContactInfoForm1.value.ContactHourPhoneNo == "" ? "" : clientContactInfoForm1.value.ContactHourPhoneNo.replace(/[^a-zA-Z0-9]/g, ''),
        streetNumber: clientContactInfoForm1.value.Contactaddress,
        streetName: clientContactInfoForm1.value.ContactAddressLine2,
        unitNumber: "",
        city: clientContactInfoForm1.value.ContactCity,
        state: clientContactInfoForm1.value.ContactState,
        zip: clientContactInfoForm1.value.ContactZip,
        homePhone: clientContactInfoForm1.value.ContactHomePhone == "" ? "" : clientContactInfoForm1.value.ContactHomePhone.replace(/[^a-zA-Z0-9]/g, ''),
        cellPhone: clientContactInfoForm1.value.ContactCellPhone == "" ? "" : clientContactInfoForm1.value.ContactCellPhone.replace(/[^a-zA-Z0-9]/g, ''),
        fax: "",
        email: clientContactInfoForm1.value.ContactEmail,
        inactive: true,
        islocal: true,

      }
      this.postContactData.contactTypeId = this.postContactData.contactTypeId.code;
      this.postContactData.state = this.postContactData.state.code;

      if (this.postContactData.contactId > 0) {
        this._httpService.Put(url, this.postContactData, 0, 0).subscribe((res) => {
          this.closePopup.emit();
        })
      }
      else {
        this._httpService.Post(url, this.postContactData, 0, 0).subscribe((res) => {
          this.closePopup.emit();
        })
      }
    }
    else {
      this.submittedContact = true;
    }
  }
}

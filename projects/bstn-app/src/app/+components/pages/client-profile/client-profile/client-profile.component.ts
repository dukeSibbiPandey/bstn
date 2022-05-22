import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormsModule,Validator, FormBuilder,ReactiveFormsModule,NgForm,FormArray,ValidationErrors, Validators} from '@angular/forms';
import { HttpService } from 'projects/bstn-app/src/app/+core/services/http.service';
import { MessageService } from 'primeng/api';
// import {AddService } from '../../+components/_models/addService';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss'],
  providers: [MessageService]
})
export class ClientProfileComponent implements OnInit {

  constructor(public _MessageService: MessageService,private _ActivatedRoute: ActivatedRoute,private _formBuilder:FormBuilder,private _httpService:HttpService) { }
  Data:any;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
     
      this.getClientDetails(params.id);
       
       
     });
  }


  getClientDetails(ClientProfileId)
{
  const url='/clients/'+ ClientProfileId +'';
  
  
//   const searchParam = {
//     'id': ClientProfileId,
    
    
// }
  this._httpService.Get(url,0,0).subscribe((res) => {  
    if (res) {
      this.Data= JSON.parse(JSON.stringify(res));       
      if(this.Data.secondaryPhone!=="")
      {
        this.Data.secondaryPhone = this.phoneFormat( this.Data.secondaryPhone)
      }
      
      if(this.Data.primaryPhone!=="")
      {
        this.Data.primaryPhone = this.phoneFormat( this.Data.primaryPhone)
      }      
             
       
    }
    else {
      
      console.log('something went wrong')
  }
})
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

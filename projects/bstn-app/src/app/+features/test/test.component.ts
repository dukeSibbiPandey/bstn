import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private _TestService: TestService) { }

  ngOnInit(): void {
  }
  handleSubmit=()=>{
    this._TestService.logout()
  }

}

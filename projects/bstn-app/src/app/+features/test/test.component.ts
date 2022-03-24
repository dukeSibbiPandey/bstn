import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private _TestService: TestService) { }

  ngOnInit(): void {
  }
  handleSubmit = () => {
    this._TestService.logout()
  }
  handlHTTPCall = () => {
    this._TestService.login('url')
  }

}

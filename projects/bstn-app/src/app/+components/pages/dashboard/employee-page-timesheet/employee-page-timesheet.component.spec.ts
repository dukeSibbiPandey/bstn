import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageTimesheetComponent } from './employee-page-timesheet.component';

describe('EmployeePageTimesheetComponent', () => {
  let component: EmployeePageTimesheetComponent;
  let fixture: ComponentFixture<EmployeePageTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

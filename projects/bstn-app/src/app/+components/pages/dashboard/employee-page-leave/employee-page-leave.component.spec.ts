import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageLeaveComponent } from './employee-page-leave.component';

describe('EmployeePageLeaveComponent', () => {
  let component: EmployeePageLeaveComponent;
  let fixture: ComponentFixture<EmployeePageLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

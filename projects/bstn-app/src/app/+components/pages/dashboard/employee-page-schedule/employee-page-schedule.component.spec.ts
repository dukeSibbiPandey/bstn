import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageScheduleComponent } from './employee-page-schedule.component';

describe('EmployeePageScheduleComponent', () => {
  let component: EmployeePageScheduleComponent;
  let fixture: ComponentFixture<EmployeePageScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

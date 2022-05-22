import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageShiftsComponent } from './employee-page-shifts.component';

describe('EmployeePageShiftsComponent', () => {
  let component: EmployeePageShiftsComponent;
  let fixture: ComponentFixture<EmployeePageShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

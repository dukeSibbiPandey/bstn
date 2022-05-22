import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageTrainingComponent } from './employee-page-training.component';

describe('EmployeePageTrainingComponent', () => {
  let component: EmployeePageTrainingComponent;
  let fixture: ComponentFixture<EmployeePageTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

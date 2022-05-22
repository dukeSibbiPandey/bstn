import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePageContactsComponent } from './employee-page-contacts.component';

describe('EmployeePageContactsComponent', () => {
  let component: EmployeePageContactsComponent;
  let fixture: ComponentFixture<EmployeePageContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePageContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

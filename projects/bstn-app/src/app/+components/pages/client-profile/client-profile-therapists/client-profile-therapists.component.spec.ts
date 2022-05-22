import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileTherapistsComponent } from './client-profile-therapists.component';

describe('ClientProfileTherapistsComponent', () => {
  let component: ClientProfileTherapistsComponent;
  let fixture: ComponentFixture<ClientProfileTherapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileTherapistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

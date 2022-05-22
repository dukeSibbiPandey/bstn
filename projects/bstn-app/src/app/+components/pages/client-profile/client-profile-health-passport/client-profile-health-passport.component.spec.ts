import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileHealthPassportComponent } from './client-profile-health-passport.component';

describe('ClientProfileHealthPassportComponent', () => {
  let component: ClientProfileHealthPassportComponent;
  let fixture: ComponentFixture<ClientProfileHealthPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileHealthPassportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileHealthPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

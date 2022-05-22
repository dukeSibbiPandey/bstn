import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileServicesComponent } from './client-profile-services.component';

describe('ClientProfileServicesComponent', () => {
  let component: ClientProfileServicesComponent;
  let fixture: ComponentFixture<ClientProfileServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileContactsComponent } from './client-profile-contacts.component';

describe('ClientProfileContactsComponent', () => {
  let component: ClientProfileContactsComponent;
  let fixture: ComponentFixture<ClientProfileContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

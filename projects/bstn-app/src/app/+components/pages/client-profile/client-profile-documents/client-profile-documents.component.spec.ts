import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileDocumentsComponent } from './client-profile-documents.component';

describe('ClientProfileDocumentsComponent', () => {
  let component: ClientProfileDocumentsComponent;
  let fixture: ComponentFixture<ClientProfileDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

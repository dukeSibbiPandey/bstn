import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddServicesComponent } from './client-add-services.component';

describe('ClientAddServicesComponent', () => {
  let component: ClientAddServicesComponent;
  let fixture: ComponentFixture<ClientAddServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAddServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAddServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

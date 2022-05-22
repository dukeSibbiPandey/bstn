import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfileActivityComponent } from './client-profile-activity.component';

describe('ClientProfileActivityComponent', () => {
  let component: ClientProfileActivityComponent;
  let fixture: ComponentFixture<ClientProfileActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfileActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfileActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

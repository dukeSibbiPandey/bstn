import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelMenuComponent } from './client-panel-menu.component';

describe('ClientPanelMenuComponent', () => {
  let component: ClientPanelMenuComponent;
  let fixture: ComponentFixture<ClientPanelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPanelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPanelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

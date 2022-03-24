import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAndTabsComponent } from './navbar-and-tabs.component';

describe('NavbarAndTabsComponent', () => {
  let component: NavbarAndTabsComponent;
  let fixture: ComponentFixture<NavbarAndTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAndTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAndTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

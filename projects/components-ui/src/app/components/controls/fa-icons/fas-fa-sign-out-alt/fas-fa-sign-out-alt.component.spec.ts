import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSignOutAltComponent } from './fas-fa-sign-out-alt.component';

describe('FasFaSignOutAltComponent', () => {
  let component: FasFaSignOutAltComponent;
  let fixture: ComponentFixture<FasFaSignOutAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSignOutAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSignOutAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

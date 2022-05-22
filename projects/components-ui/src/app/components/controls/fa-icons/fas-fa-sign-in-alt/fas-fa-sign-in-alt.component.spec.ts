import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasFaSignInAltComponent } from './fas-fa-sign-in-alt.component';

describe('FasFaSignInAltComponent', () => {
  let component: FasFaSignInAltComponent;
  let fixture: ComponentFixture<FasFaSignInAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasFaSignInAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FasFaSignInAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

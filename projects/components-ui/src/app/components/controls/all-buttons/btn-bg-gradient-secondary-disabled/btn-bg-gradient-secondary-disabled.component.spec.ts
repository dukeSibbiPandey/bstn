import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondaryDisabledComponent } from './btn-bg-gradient-secondary-disabled.component';

describe('BtnBgGradientSecondaryDisabledComponent', () => {
  let component: BtnBgGradientSecondaryDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

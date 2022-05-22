import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimaryDisabledComponent } from './btn-bg-gradient-primary-disabled.component';

describe('BtnBgGradientPrimaryDisabledComponent', () => {
  let component: BtnBgGradientPrimaryDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimaryDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimaryDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimaryDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

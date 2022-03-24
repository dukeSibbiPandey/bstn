import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningDisabledComponent } from './btn-bg-gradient-warning-disabled.component';

describe('BtnBgGradientWarningDisabledComponent', () => {
  let component: BtnBgGradientWarningDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

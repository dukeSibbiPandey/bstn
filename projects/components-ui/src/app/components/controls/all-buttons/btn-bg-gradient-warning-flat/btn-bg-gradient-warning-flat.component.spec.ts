import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningFlatComponent } from './btn-bg-gradient-warning-flat.component';

describe('BtnBgGradientWarningFlatComponent', () => {
  let component: BtnBgGradientWarningFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

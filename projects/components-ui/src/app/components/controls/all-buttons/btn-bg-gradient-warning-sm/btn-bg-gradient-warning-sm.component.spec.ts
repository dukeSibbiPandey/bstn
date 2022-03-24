import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningSmComponent } from './btn-bg-gradient-warning-sm.component';

describe('BtnBgGradientWarningSmComponent', () => {
  let component: BtnBgGradientWarningSmComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

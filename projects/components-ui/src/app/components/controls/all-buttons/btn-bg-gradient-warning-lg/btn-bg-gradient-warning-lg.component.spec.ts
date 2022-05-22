import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningLgComponent } from './btn-bg-gradient-warning-lg.component';

describe('BtnBgGradientWarningLgComponent', () => {
  let component: BtnBgGradientWarningLgComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

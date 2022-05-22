import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningXsComponent } from './btn-bg-gradient-warning-xs.component';

describe('BtnBgGradientWarningXsComponent', () => {
  let component: BtnBgGradientWarningXsComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

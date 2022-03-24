import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientWarningComponent } from './btn-bg-gradient-warning.component';

describe('BtnBgGradientWarningComponent', () => {
  let component: BtnBgGradientWarningComponent;
  let fixture: ComponentFixture<BtnBgGradientWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondaryLgComponent } from './btn-bg-gradient-secondary-lg.component';

describe('BtnBgGradientSecondaryLgComponent', () => {
  let component: BtnBgGradientSecondaryLgComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

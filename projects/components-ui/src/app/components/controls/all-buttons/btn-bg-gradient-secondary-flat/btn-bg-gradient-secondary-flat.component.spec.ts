import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondaryFlatComponent } from './btn-bg-gradient-secondary-flat.component';

describe('BtnBgGradientSecondaryFlatComponent', () => {
  let component: BtnBgGradientSecondaryFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

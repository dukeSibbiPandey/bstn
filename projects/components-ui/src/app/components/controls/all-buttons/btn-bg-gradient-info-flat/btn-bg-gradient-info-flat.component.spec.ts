import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoFlatComponent } from './btn-bg-gradient-info-flat.component';

describe('BtnBgGradientInfoFlatComponent', () => {
  let component: BtnBgGradientInfoFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

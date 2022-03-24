import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoDisabledComponent } from './btn-bg-gradient-info-disabled.component';

describe('BtnBgGradientInfoDisabledComponent', () => {
  let component: BtnBgGradientInfoDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

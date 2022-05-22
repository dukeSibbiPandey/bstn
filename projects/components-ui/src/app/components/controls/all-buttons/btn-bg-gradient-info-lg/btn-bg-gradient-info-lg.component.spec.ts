import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoLgComponent } from './btn-bg-gradient-info-lg.component';

describe('BtnBgGradientInfoLgComponent', () => {
  let component: BtnBgGradientInfoLgComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

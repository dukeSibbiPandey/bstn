import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerDisabledComponent } from './btn-bg-gradient-danger-disabled.component';

describe('BtnBgGradientDangerDisabledComponent', () => {
  let component: BtnBgGradientDangerDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

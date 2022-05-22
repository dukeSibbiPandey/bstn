import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerFlatComponent } from './btn-bg-gradient-danger-flat.component';

describe('BtnBgGradientDangerFlatComponent', () => {
  let component: BtnBgGradientDangerFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

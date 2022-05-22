import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimaryFlatComponent } from './btn-bg-gradient-primary-flat.component';

describe('BtnBgGradientPrimaryFlatComponent', () => {
  let component: BtnBgGradientPrimaryFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimaryFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimaryFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimaryFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

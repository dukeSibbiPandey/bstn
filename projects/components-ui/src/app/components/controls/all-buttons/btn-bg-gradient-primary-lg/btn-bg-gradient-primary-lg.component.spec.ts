import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimaryLgComponent } from './btn-bg-gradient-primary-lg.component';

describe('BtnBgGradientPrimaryLgComponent', () => {
  let component: BtnBgGradientPrimaryLgComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimaryLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimaryLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimaryLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

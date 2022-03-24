import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessDisabledComponent } from './btn-bg-gradient-sucess-disabled.component';

describe('BtnBgGradientSucessDisabledComponent', () => {
  let component: BtnBgGradientSucessDisabledComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessDisabledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

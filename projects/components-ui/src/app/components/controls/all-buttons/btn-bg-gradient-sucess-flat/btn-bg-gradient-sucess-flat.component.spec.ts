import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessFlatComponent } from './btn-bg-gradient-sucess-flat.component';

describe('BtnBgGradientSucessFlatComponent', () => {
  let component: BtnBgGradientSucessFlatComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessFlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

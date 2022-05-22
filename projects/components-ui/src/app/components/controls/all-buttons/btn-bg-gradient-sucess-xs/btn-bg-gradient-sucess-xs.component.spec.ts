import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessXsComponent } from './btn-bg-gradient-sucess-xs.component';

describe('BtnBgGradientSucessXsComponent', () => {
  let component: BtnBgGradientSucessXsComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

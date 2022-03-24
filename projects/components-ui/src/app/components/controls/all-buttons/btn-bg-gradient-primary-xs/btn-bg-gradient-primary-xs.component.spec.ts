import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimaryXsComponent } from './btn-bg-gradient-primary-xs.component';

describe('BtnBgGradientPrimaryXsComponent', () => {
  let component: BtnBgGradientPrimaryXsComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

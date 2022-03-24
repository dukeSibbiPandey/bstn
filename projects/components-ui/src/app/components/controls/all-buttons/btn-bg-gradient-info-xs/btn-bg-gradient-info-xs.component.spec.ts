import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoXsComponent } from './btn-bg-gradient-info-xs.component';

describe('BtnBgGradientInfoXsComponent', () => {
  let component: BtnBgGradientInfoXsComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

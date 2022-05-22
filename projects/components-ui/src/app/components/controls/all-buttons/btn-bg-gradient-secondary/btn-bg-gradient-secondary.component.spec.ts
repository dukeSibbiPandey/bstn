import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondaryComponent } from './btn-bg-gradient-secondary.component';

describe('BtnBgGradientSecondaryComponent', () => {
  let component: BtnBgGradientSecondaryComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

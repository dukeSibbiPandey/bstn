import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondaryXsComponent } from './btn-bg-gradient-secondary-xs.component';

describe('BtnBgGradientSecondaryXsComponent', () => {
  let component: BtnBgGradientSecondaryXsComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondaryXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondaryXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondaryXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

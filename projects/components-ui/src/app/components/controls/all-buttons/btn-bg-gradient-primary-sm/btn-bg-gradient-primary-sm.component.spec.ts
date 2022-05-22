import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimarySmComponent } from './btn-bg-gradient-primary-sm.component';

describe('BtnBgGradientPrimarySmComponent', () => {
  let component: BtnBgGradientPrimarySmComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSecondarySmComponent } from './btn-bg-gradient-secondary-sm.component';

describe('BtnBgGradientSecondarySmComponent', () => {
  let component: BtnBgGradientSecondarySmComponent;
  let fixture: ComponentFixture<BtnBgGradientSecondarySmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSecondarySmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSecondarySmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoSmComponent } from './btn-bg-gradient-info-sm.component';

describe('BtnBgGradientInfoSmComponent', () => {
  let component: BtnBgGradientInfoSmComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

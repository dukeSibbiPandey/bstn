import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerLgComponent } from './btn-bg-gradient-danger-lg.component';

describe('BtnBgGradientDangerLgComponent', () => {
  let component: BtnBgGradientDangerLgComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

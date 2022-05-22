import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerSmComponent } from './btn-bg-gradient-danger-sm.component';

describe('BtnBgGradientDangerSmComponent', () => {
  let component: BtnBgGradientDangerSmComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

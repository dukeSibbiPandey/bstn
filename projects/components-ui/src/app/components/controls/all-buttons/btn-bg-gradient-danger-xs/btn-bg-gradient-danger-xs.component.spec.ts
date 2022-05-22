import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerXsComponent } from './btn-bg-gradient-danger-xs.component';

describe('BtnBgGradientDangerXsComponent', () => {
  let component: BtnBgGradientDangerXsComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerXsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerXsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerXsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

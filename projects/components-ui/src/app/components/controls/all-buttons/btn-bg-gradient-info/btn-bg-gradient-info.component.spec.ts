import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientInfoComponent } from './btn-bg-gradient-info.component';

describe('BtnBgGradientInfoComponent', () => {
  let component: BtnBgGradientInfoComponent;
  let fixture: ComponentFixture<BtnBgGradientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

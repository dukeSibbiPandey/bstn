import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientPrimaryComponent } from './btn-bg-gradient-primary.component';

describe('BtnBgGradientPrimaryComponent', () => {
  let component: BtnBgGradientPrimaryComponent;
  let fixture: ComponentFixture<BtnBgGradientPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

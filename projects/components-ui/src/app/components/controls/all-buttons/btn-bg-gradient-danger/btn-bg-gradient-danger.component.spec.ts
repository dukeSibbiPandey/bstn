import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientDangerComponent } from './btn-bg-gradient-danger.component';

describe('BtnBgGradientDangerComponent', () => {
  let component: BtnBgGradientDangerComponent;
  let fixture: ComponentFixture<BtnBgGradientDangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientDangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

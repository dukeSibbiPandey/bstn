import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessLgComponent } from './btn-bg-gradient-sucess-lg.component';

describe('BtnBgGradientSucessLgComponent', () => {
  let component: BtnBgGradientSucessLgComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

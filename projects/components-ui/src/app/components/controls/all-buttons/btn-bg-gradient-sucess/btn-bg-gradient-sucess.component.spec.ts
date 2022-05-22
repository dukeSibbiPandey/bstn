import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessComponent } from './btn-bg-gradient-sucess.component';

describe('BtnBgGradientSucessComponent', () => {
  let component: BtnBgGradientSucessComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

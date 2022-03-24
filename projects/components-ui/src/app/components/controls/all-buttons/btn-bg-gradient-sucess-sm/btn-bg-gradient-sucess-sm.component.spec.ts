import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBgGradientSucessSmComponent } from './btn-bg-gradient-sucess-sm.component';

describe('BtnBgGradientSucessSmComponent', () => {
  let component: BtnBgGradientSucessSmComponent;
  let fixture: ComponentFixture<BtnBgGradientSucessSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBgGradientSucessSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBgGradientSucessSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteLightComponent } from './color-palette-light.component';

describe('ColorPaletteLightComponent', () => {
  let component: ColorPaletteLightComponent;
  let fixture: ComponentFixture<ColorPaletteLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

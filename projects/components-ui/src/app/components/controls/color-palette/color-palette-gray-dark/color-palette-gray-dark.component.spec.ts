import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteGrayDarkComponent } from './color-palette-gray-dark.component';

describe('ColorPaletteGrayDarkComponent', () => {
  let component: ColorPaletteGrayDarkComponent;
  let fixture: ComponentFixture<ColorPaletteGrayDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteGrayDarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteGrayDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

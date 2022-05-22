import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteGrayComponent } from './color-palette-gray.component';

describe('ColorPaletteGrayComponent', () => {
  let component: ColorPaletteGrayComponent;
  let fixture: ComponentFixture<ColorPaletteGrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteGrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

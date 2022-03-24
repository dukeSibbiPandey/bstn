import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteSecondaryComponent } from './color-palette-secondary.component';

describe('ColorPaletteSecondaryComponent', () => {
  let component: ColorPaletteSecondaryComponent;
  let fixture: ComponentFixture<ColorPaletteSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

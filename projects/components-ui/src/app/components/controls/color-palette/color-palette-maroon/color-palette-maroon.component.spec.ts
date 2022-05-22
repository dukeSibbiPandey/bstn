import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteMaroonComponent } from './color-palette-maroon.component';

describe('ColorPaletteMaroonComponent', () => {
  let component: ColorPaletteMaroonComponent;
  let fixture: ComponentFixture<ColorPaletteMaroonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteMaroonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteMaroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

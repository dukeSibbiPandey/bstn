import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteBlackComponent } from './color-palette-black.component';

describe('ColorPaletteBlackComponent', () => {
  let component: ColorPaletteBlackComponent;
  let fixture: ComponentFixture<ColorPaletteBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteBlackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

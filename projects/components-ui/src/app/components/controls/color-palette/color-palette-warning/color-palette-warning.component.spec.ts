import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteWarningComponent } from './color-palette-warning.component';

describe('ColorPaletteWarningComponent', () => {
  let component: ColorPaletteWarningComponent;
  let fixture: ComponentFixture<ColorPaletteWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

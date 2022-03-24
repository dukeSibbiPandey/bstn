import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteIndigoComponent } from './color-palette-indigo.component';

describe('ColorPaletteIndigoComponent', () => {
  let component: ColorPaletteIndigoComponent;
  let fixture: ComponentFixture<ColorPaletteIndigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteIndigoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteIndigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteOliveComponent } from './color-palette-olive.component';

describe('ColorPaletteOliveComponent', () => {
  let component: ColorPaletteOliveComponent;
  let fixture: ComponentFixture<ColorPaletteOliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteOliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteOliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

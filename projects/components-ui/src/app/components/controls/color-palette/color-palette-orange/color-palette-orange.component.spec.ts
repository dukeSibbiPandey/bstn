import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteOrangeComponent } from './color-palette-orange.component';

describe('ColorPaletteOrangeComponent', () => {
  let component: ColorPaletteOrangeComponent;
  let fixture: ComponentFixture<ColorPaletteOrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPaletteOrangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
